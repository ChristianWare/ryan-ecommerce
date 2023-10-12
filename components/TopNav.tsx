"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "@/redux/userSlice";
import toast from "react-hot-toast";

const TopNav = () => {
  const { data, status } = useSession();
  // console.log(data);
  // console.log(status);
  const { currentUser } = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    try {
      dispatch(SetCurrentUser(data?.user?.name));
    } catch (error: any) {
      console.log("Something went wrong");
    }
  };

  // Call getCurrentUser when the session is authenticated
  if (status === "authenticated" && !currentUser) {
    getCurrentUser();
  }

  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
      <Link href='/' className='nav-link'>
        🛒 NEXT ECOMM
      </Link>
      <h1>{currentUser}</h1>
      {status === "authenticated" ? (
        <div className='d-flex justify-content-end'>
          <Link href='/profile' className='nav-link'>
            Cart
          </Link>
          <Link href='/profile' className='nav-link'>
            Profile
          </Link>
          <Link href='/profile' className='nav-link'>
            {currentUser} ({(data?.user as { role: string } | undefined)?.role})
          </Link>
          <a
            className='nav-link pointer'
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
          >
            Logout
          </a>
        </div>
      ) : status === "loading" ? (
        <a className='nav-link text-danger'>Loading</a>
      ) : (
        <div className='d-flex'>
          <Link href='/login' className='nav-link'>
            Login
          </Link>
          <Link href='/register' className='nav-link'>
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};
export default TopNav;
