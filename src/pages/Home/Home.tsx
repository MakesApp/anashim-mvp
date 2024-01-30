import ArticleSection from '@/components/ArticleSection/ArticleSection';
import styles from './Home.module.css';

import HeroSection from './components/HeroSection/HeroSection';
import ProductsList from './components/ProductsList/ProductsList';
import { articles } from '@/data';
import AHA from './components/MobileProduct/AHA';
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
            <ProductsList />
          </section>
        ) : (
          <AHA />
        )}
        <ArticleSection article={article} />
      </main>
    </>
  );
};

export default Home;
