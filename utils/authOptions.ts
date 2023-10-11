import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "../models/user";
import bcrypt from "bcrypt";
import dbConnect from "./dbConnect";

export const authOptions = {
  session: {
    // strategy: "jwt",
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days (adjust as needed)
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        // Your custom credentials options here if needed
      },
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials as {
          email: string;
          password: string;
        }; // Type assertion
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: any }) {
      const { email, name, image } = user;
      dbConnect();

      let dbUser = await User.findOne({ email });
      if (!dbUser) {
        await User.create({
          email,
          name,
          image,
        });
      }
      return true;
    },
    jwt: async ({ token, user }: { token: any; user: any }) => {
      const userByEmail = await User.findOne({ email: token.email });
      userByEmail.password = undefined;
      userByEmail.resetCode = undefined;
      token.user = userByEmail;
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
