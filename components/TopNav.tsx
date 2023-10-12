"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";

const TopNav = () => {
  const { data, status } = useSession();
  // console.log({ data, status });

  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
      <Link href='/' className='nav-link'>
        🛒 NEXT ECOMM
      </Link>

      {status === "authenticated" ? (
        <div className='d-flex justify-content-end'>
          <Link href='/profile' className='nav-link'>
            Profile
          </Link>
          <Link
            href={`/dashboard/${
              (data?.user as { role: string } | undefined)?.role === "admin"
                ? "admin"
                : "user"
            }`}
            className='nav-link'
          >
            {data?.user?.name} (
            {(data?.user as { role: string } | undefined)?.role})
          </Link>
          <a
            className='nav-link pointer'
            onClick={() => {
              signOut({ callbackUrl: "/login" });
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
