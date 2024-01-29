import styles from './HeroSection.module.css';
import SearchFilterBar from '../SearchFilterBar/SearchFilterBar';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <p className={styles.intro}>
        <div>
          הבית שמאגד את כל המיזמים, היוזמות והכלים החדשניים העוסקים בפיתוח ההון האנושי,
        </div>
        <div className={styles.bold}>בתחומי החינוך, הלמידה והעבודה</div>
      </p>

      <div>
        <h1 className={styles.title}>למצוא את כל מה שחדש בפיתוח ההון האנושי</h1>
        <div className={styles.searchBarContainer}>
          <SearchFilterBar />
        </div>
        <h2 className={styles.subTitle}>הצטרפו אלינו לאחרונה ל -Hub:</h2>
      </div>
    </div>
  );
};

export default HeroSection;
