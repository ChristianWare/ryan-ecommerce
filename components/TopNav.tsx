import Link from "next/link";

const TopNav = () => {
  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
      <Link href='/' className='nav-link'>
        🛒 NEXT ECOMM
      </Link>
      <div className='d-flex'>
        <Link href='/login' className='nav-link'>
          Login
        </Link>
        <Link href='/login' className='nav-link'>
          Register
        </Link>
      </div>
    </nav>
  );
};
export default TopNav;
