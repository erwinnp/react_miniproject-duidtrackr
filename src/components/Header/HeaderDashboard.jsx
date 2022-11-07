import Navbar from './Navbar';
import NavbarDashboard from './NavbarDashboard';

const HeaderDashboard = () => {
  return (
    <header className='fixed w-full lg:h-[80px] lg:flex items-center bg-[#fff]'>
      <NavbarDashboard />
    </header>
  );
};

export default HeaderDashboard;
