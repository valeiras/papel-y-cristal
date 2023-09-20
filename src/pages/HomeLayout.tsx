import { Navbar } from '../components/';
import { Outlet } from 'react-router-dom';

const HomeLayout: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
export default HomeLayout;
