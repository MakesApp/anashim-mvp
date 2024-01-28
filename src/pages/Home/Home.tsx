import Article from '@components/Article/Article';
import styles from './Home.module.css';

import HeroSection from './components/HeroSection/HeroSection';
import ProductsList from './components/ProductsList/ProductsList';
import { articles } from '@/data';
const article = articles[0];
const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <HeroSection />
        <section className={styles.listContainer}>
          <ProductsList />
        </section>
        <section>
          <h2 className={styles.articleSectionTitle}>חדשות חמות מהתעשייה</h2>
          <div className={styles.articleContainer}>
            <Article {...article} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
