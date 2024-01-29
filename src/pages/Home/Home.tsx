import ArticleSection from '@/components/ArticleSection/ArticleSection';
import styles from './Home.module.css';

import HeroSection from './components/HeroSection/HeroSection';
// import ProductsList from './components/ProductsList/ProductsList';
import { articles } from '@/data';
import AHA from './components/MobileProduct/AHA';
const article = articles[0];
const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <HeroSection />
        {/* <section className={styles.listContainer}> */}
        {/* <ProductsList /> */}
        {/* </section> */}
        <AHA />
        <ArticleSection article={article} />
      </main>
    </>
  );
};

export default Home;
