import styles from './HeroSection.module.css';
import SearchFilterBar from '../SearchFilterBar/SearchFilterBar';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <p className={styles.intro}>
        ﻿﻿﻿הבית שמאגד את כל המיזמים, היוזמות והכלים החדשניים העוסקים בפיתוח ההון האנושי,
        בתחומי החינוך, הלמידה והעבודה.
      </p>

      <div>
        <h1 className={styles.title}>למצוא את כל מה שחדש בפיתוח ההון האנושי</h1>
        <SearchFilterBar />
      </div>
    </div>
  );
};

export default HeroSection;
