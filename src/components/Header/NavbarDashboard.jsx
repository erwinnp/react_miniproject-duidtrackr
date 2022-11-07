import { Link, useNavigate } from 'react-router-dom';
import { loginAuth } from '../../utils/authHelpers';

const NavbarDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='container mx-auto flex items-center justify-between py-[12px] px-[8px] lg:w-[1200px] lg:px-0'>
      <div className='lg:flex items-center gap-[40px]'>
        <a href='' className='text-color-primary text-[24px] font-bold'>
          Duid<span className='text-color-dark'>Trackr.</span>
        </a>
      </div>
      <div className='hidden lg:flex gap-[40px] text-color-primary'>
        <button className='btn btn-danger'>
          <Link to='/'>Logout</Link>
        </button>
      </div>
      {/* mobile navbar */}
      <button
        className={'btn-danger btn font-medium lg:hidden'}
        onClick={() => {
          loginAuth.setLogout(navigate);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default NavbarDashboard;
