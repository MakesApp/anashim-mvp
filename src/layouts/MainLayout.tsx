import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router';
import styles from './MainLayout.module.css'
const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
