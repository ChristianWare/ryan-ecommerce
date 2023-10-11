import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Define a type for req.nextauth.token
type TokenType = {
  user?: {
    role?: string;
    // Add other properties if necessary
  };
  // Add other properties if necessary
};

export const config = {
  matcher: ["/dashboard/:path*", "/api/user/:path*", "/api/admin/:path*"],
};

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;
    const userRole = (req.nextauth.token as TokenType)?.user?.role; // Cast to the custom type

    if (url?.includes("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  }
);
