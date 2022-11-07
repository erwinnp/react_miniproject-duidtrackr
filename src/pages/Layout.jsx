import { Outlet } from 'react-router-dom';
import HeaderDashboard from '../components/Header/HeaderDashboard';
import { loginAuth } from '../utils/authHelpers';

const Layout = () => {
  if (loginAuth.setAuth())
    return (
      <>
        <HeaderDashboard />
        <main>
          <Outlet />
        </main>
      </>
    );
};

export default Layout;
