// import styles from './Home.module.css';
// import hero from '@assets/images/hero.svg';
import ag from '@assets/icons/ag.svg';

// import HeroSection from './components/HeroSection/HeroSection';
import ProductCard from '@components/ProductCard/ProductCard';
const Home = () => {
  return (
    <div style={{ display: 'flex', margin: '2rem' }}>
      {/* <img className={styles.heroImg} loading="lazy" src={hero} alt="hero" />
      <main className={styles.home}>
        <HeroSection />
      </main> */}
      <ProductCard
        logo={ag}
        name="Anashim IL"
        lastAdded={true}
        quote="רשות החדשנות מקדמת את החדשנות בתעשייה הישראלית, בדגש על תעשיית ההייטק , ולרבות תעשיית היצור."
        tags={['מיזם', 'חינוך', 'למידה', 'תעסוקה', 'ציבורי']}
      />
      <ProductCard
        logo={ag}
        name="Anashim IL"
        quote="רשות החדשנות מקדמת את החדשנות בתעשייה הישראלית, בדגש על תעשיית ההייטק , ולרבות תעשיית היצור."
        tags={['מיזם']}
      />
    </div>
  );
};

export default Home;
