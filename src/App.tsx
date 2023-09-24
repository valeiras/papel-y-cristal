import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  ErrorPage,
  NotFound,
  Editorial,
  Catalogo,
  Contacto,
  Coleccion,
  Autor,
} from './pages';
import {
  AUTORES,
  CATALOGO,
  COLECCIONES,
  CONTACTO,
  EDITORIAL,
} from './assets/ts/names';

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
          { path: `/${EDITORIAL.friendlyUrl}`, element: <Editorial /> },
          { path: `/${CATALOGO.friendlyUrl}`, element: <Catalogo /> },
          { path: `/${CONTACTO.friendlyUrl}`, element: <Contacto /> },
          {
            path: `/${COLECCIONES.friendlyUrl}/:collectionUrl`,
            element: <Coleccion />,
          },
          {
            path: `/${AUTORES.friendlyUrl}/authorUrl`,
            element: <Autor />,
          },
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
