"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        toast.error("Email is invalid or already taken");
        setLoading(false);
      } else {
        toast.success(data.success);
        router.push("/login");
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
            <h2 className='mb-4 text-center'>Register</h2>

            <form onSubmit={handleSubmit}>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='form-control mb-4'
                placeholder='Username'
              />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='form-control mb-4'
                placeholder='Email'
              />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form-control mb-4'
                placeholder='Password'
              />
              <button
                className='btn btn-primary btn-raised'
                disabled={loading || !name || !email || !password}
              >
                {loading ? "Please Wait..." : "Submit"}
              </button>
            </form>
            <button
              className='btn btn-raised mb-4'
              onClick={() => signIn("google", { callbackUrl })}
            >
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default RegisterPage;
