"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "@/redux/userSlice";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const { data, status } = useSession();
  const { currentUser } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    try {
      dispatch(SetCurrentUser(data?.user?.name?.slice(0, 1)));
    } catch (error: any) {
      console.log("Something went wrong");
    }
  };

  // Call getCurrentUser when the session is authenticated
  if (status === "authenticated" && !currentUser) {
    getCurrentUser();
  }

  // Call getCurrentUser when the session is authenticated
  if (status === "authenticated" && !currentUser) {
    getCurrentUser();
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        toast.error(result?.error);
        setLoading(false);
      } else {
        toast.success("Logged in Successfully");
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <main>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center vh-100'>
          <div className='col-lg-5 shadow bg-light p-5'>
            <h2>{currentUser ? "You are already logged in" : "Login"}</h2>
            <br />
            <form onSubmit={handleSubmit}>
              {!currentUser ? (
                <>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control mb-4'
                    placeholder='Enter your email'
                  />
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='form-control mb-4'
                    placeholder='Enter your password'
                  />
                  <button
                    className='btn btn-primary btn-raised'
                    disabled={loading || !email || !password}
                  >
                    {loading ? "Please Wait..." : "Submit"}
                  </button>
                  <button
                    className='btn btn-danger btn-raised mb-4'
                    onClick={() => signIn("google", { callbackUrl })}
                  >
                    Sign In with Google
                  </button>
                </>
              ) : (
                <>
                  <button
                    className='btn btn-danger btn-raised mb-4'
                    onClick={() => {
                      signOut({ callbackUrl: "/" });
                    }}
                  >
                    Logout
                  </button>
                  <Link href='/'
                    className='btn btn-primary btn-raised mb-4'
                   
                  >
                    Go Home
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default RegisterPage;
