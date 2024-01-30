import styles from './JoinHub.module.css';

const JoinHub = () => {
  const handleExternalLinkClick = () => {
    window.gtag &&
      window.gtag('event', 'click_on_add_product_cta', {
        event_category: 'Button Click',
        event_label: 'Click on add product CTA',
      });
  };

  return (
    <div className={styles.container}>
      <p className={styles.big_text}>
        יש לכם מיזם, תוכנית או פלטפורמה חדשנית בתחומי פיתוח ההון האנושי?
      </p>
      <div className={styles.bottom}>
        <p className={styles.bottom_small_text}>
          פה יכולים לקבל חשיפה, ליצור חיבורים ולשתף בידע מקצועני
        </p>
        <a
          href="https://forms.monday.com/forms/3e6f28898015233ba02e315eec82385f?r=use1"
          target="_blank"
          rel="noreferrer"
          className={styles.bottom_link}
          onClick={handleExternalLinkClick}
        >
          להצטרפות
        </a>
      </div>
    </div>
  );
};

export default JoinHub;
