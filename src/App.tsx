import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  ErrorPage,
  NotFound,
  Editorial,
  Catalogo,
  Contacto,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Landing /> },
          { path: '/editorial', element: <Editorial /> },
          { path: '/catalogo', element: <Catalogo /> },
          { path: '/contacto', element: <Contacto /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
