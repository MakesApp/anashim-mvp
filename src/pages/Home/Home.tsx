import styles from './Home.module.css';
import hero from '@assets/images/hero.jpg';

import HeroSection from './components/HeroSection/HeroSection';
import ProductsList from './components/ProductsList/ProductsList';
const Home = () => {
  return (
    <div>
      <main className={styles.home}>
        <div className={styles.heroSectionContainer}>
          <img className={styles.heroImg} loading="lazy" src={hero} alt="hero" />
          <HeroSection />
        </div>
        <div className={styles.listContainer}>
          <ProductsList />
        </div>
        <h2 className={styles.articleSectionTitle}>חדשות חמות מהתעשייה</h2>
      </main>
    </div>
  );
};

export default Home;
