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
      //
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
          </div>
        </div>
      </div>
    </main>
  );
};
export default RegisterPage;
