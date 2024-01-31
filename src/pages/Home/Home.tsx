import ArticleSection from '@/components/ArticleSection/ArticleSection';
import styles from './Home.module.css';

import HeroSection from './components/HeroSection/HeroSection';
import LatestFourProducts from './components/LatestFourProducts/LatestFourProducts';
import { articles } from '@/data';
import Swiper from './components/Swiper/Swiper';
import useIsMobile from '@/hooks/useIsMobile';
const article = articles[0];
const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <main className={styles.home}>
        <HeroSection />
        {!isMobile ? (
          <section className={styles.listContainer}>
            <LatestFourProducts />
          </section>
        ) : (
          <Swiper />
        )}
        <ArticleSection article={article} />
      </main>
    </>
  );
};

export default Home;
