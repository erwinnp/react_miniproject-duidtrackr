import { Link } from 'react-router-dom';

const NavbarMobile = () => {
  return (
    <nav className='mt-6 ml-6 w-full h-full'>
      <ul className='flex flex-col gap-4 text-[#fff]'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
      <div className='border-b-2 border-[#fff] my-5 w-1/2'></div>
      <ul className='flex flex-col gap-4 text-[#fff]'>
        <li className=''>
          <Link>Login</Link>
        </li>
        <li className=''>
          <Link>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
