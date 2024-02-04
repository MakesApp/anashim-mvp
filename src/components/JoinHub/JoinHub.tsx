import styles from './JoinHub.module.css';
import ReactGA from 'react-ga4';
import { useCallback } from 'react';

const JoinHub = () => {
  const handleExternalLinkClick = useCallback(() => {
    // Trigger the analytics event
    ReactGA.event({
      category: 'Button Click',
      action: 'click_on_add_product_cta',
    });
    // Programmatically navigate to the form URL
    window.open(
      'https://forms.monday.com/forms/3e6f28898015233ba02e315eec82385f?r=use1',
      '_blank',
    );
  }, []);

  return (
    <div className={styles.container} onClick={handleExternalLinkClick}>
      <p className={styles.big_text}>
        יש לכם מיזם, תוכנית או פלטפורמה חדשנית בתחומי פיתוח ההון האנושי?
      </p>
      <div className={styles.bottom}>
        <p className={styles.bottom_small_text}>
          פה יכולים לקבל חשיפה, ליצור חיבורים ולשתף בידע מקצועני
        </p>
        <span className={styles.bottom_link}>להצטרפות</span>
      </div>
    </div>
  );
};

export default JoinHub;
