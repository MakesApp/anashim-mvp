import Article from '@components/Article/Article';
import styles from './Home.module.css';

import HeroSection from './components/HeroSection/HeroSection';
import ProductsList from './components/ProductsList/ProductsList';
import { articles } from '@/data';
const article = articles[0];
const Home = () => {
  return (
    <div>
      <main className={styles.home}>
        <HeroSection />
        <div className={styles.listContainer}>
          <ProductsList />
        </div>
        <h2 className={styles.articleSectionTitle}>חדשות חמות מהתעשייה</h2>
        <Article {...article} />
      </main>
    </div>
  );
};

export default Home;
