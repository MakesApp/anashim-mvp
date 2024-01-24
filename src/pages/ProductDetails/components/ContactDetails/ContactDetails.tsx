// import { useState } from 'react';
import styles from './ContactDetails.module.css';

const ContactDetails = () => {
  //   const [showDetails, setShowDetails] = useState(true);
  const showDetails = false;
  return (
    <div>
      <div className={styles.linksContainer}>
        <div className={styles.private}>
          <div className={styles.detail}>
            <img src={''} alt="phone" loading="lazy" />
            <span className={styles.text && (!showDetails ? styles.hidden : '')}>
              link
            </span>
          </div>
        </div>
        <div className={styles.public}>
          <div className={styles.detail}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
