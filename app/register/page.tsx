"use client";

import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(name, email, password);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Register Page</h1>
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
                placeholder='Enter your name'
              />
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
                disabled={loading || !name || !email || !password}
              >
                {loading ? "Please Wait..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default RegisterPage;
