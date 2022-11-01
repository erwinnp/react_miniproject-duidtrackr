import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers';

const Layout = () => {
  return (
    <>
      <Headers />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
