import { Navbar, NavbarSpacer } from '../components/';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <main>
      <NavbarSpacer />
      <Navbar />
      <Outlet />
    </main>
  );
};
export default HomeLayout;
