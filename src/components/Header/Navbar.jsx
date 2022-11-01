import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  const handleNavMobile = () => {
    setNavMobile(!navMobile);
  };

  return (
    <div className='container mx-auto flex items-center justify-between py-[12px] px-[8px] lg:w-[1200px] lg:px-0'>
      <div className='lg:flex items-center gap-[40px]'>
        <a href='' className='text-color-primary text-[24px] font-bold'>
          Duid<span className='text-color-dark'>Trackr.</span>
        </a>
        <ul className='hidden lg:flex gap-[40px] text-color-primary'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className='hidden lg:flex gap-[40px] text-color-primary'>
        <button className='btn'>
          <Link to='/'>Login</Link>
        </button>
        <button className='btn btn-primary'>
          <Link>Register</Link>
        </button>
      </div>
      {/* mobile navbar */}
      <button
        className={`${
          navMobile ? 'btn-danger' : 'btn-primary'
        } btn font-medium lg:hidden`}
        onClick={handleNavMobile}
      >
        {navMobile ? 'X' : 'Menu'}
      </button>
      <div
        className={`${
          navMobile ? 'left-0' : '-left-full'
        }  fixed top-0 bottom-0 w-[60vw] bg-color-primary lg:hidden transition-all`}
      >
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Navbar;
