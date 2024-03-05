import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { Layout };
