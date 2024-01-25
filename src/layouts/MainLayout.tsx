import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
