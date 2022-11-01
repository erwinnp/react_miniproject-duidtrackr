import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Header/Navbar';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
