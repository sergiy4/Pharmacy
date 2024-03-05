import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout, ErrorPage } from './libs/components/components';
import { Main } from './pages/main/main';
import { AppRoute } from './libs/enums/app/app-route.enum';
import { Cart } from './pages/cart/cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: AppRoute.ROOT,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: AppRoute.CART,
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export { Router };
