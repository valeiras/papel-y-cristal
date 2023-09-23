import { Navbar, NavbarSpacer, ContactFooter } from '../components/';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <main>
      <NavbarSpacer />
      <Navbar />
      <Outlet />
      <ContactFooter />
    </main>
  );
};
export default HomeLayout;
