import styles from './HeroSection.module.css';
import SearchFilterBar from '../SearchFilterBar/SearchFilterBar';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div>
        <p className={styles.intro}>
          <span>הבית שמאגד את כל המיזמים, היוזמות והכלים החדשניים העוסקים</span>
          <span>בפיתוח ההון האנושי, בתחומי החינוך, הלמידה והעבודה</span>
        </p>

        <div>
          <h1 className={styles.title}>למצוא את כל מה שחדש בפיתוח ההון האנושי</h1>
          <div className={styles.searchBarContainer}>
            <SearchFilterBar />
          </div>
          <h2 className={styles.subTitle}>שימו לב לארגונים האחרונים שהצטרפו ל-HUB</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
