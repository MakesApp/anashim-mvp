import { useState } from 'react';
import emailIcon from '@assets/icons/contact/email.png';
import linkedinIcon from '@assets/icons/contact/linkedin.png';
import telIcon from '@assets/icons/contact/tel.png';
import webIcon from '@assets/icons/contact/web.png';
import styles from './ContactDetails.module.css';
import linkIcon from '@assets/icons/link.svg';
import { IContactDetailsProps } from './ContactDetails.type';

const ContactDetails: React.FC<IContactDetailsProps> = ({
  phone,
  link,
  linkedIn,
  email,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log('====================================');
  console.log(showDetails);
  console.log('====================================');
  const toggleDetailsBtn = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={`${styles.private}  ${styles.list}`}>
          <div className={styles.detail}>
            <img
              className={`${styles.icon} ${showDetails ? '' : styles.lowOpacity}`}
              src={telIcon}
              alt="phone"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              {phone}
            </span>
          </div>
          <a href={`mailto:${email}`} className={styles.detail} target="_blank">
            <img
              className={`${styles.icon} ${showDetails ? '' : styles.lowOpacity}`}
              src={emailIcon}
              alt="email"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              {email}
            </span>
          </a>
          <a href={link} target="_blank" className={styles.detail}>
            <img
              className={`${styles.icon} ${showDetails ? '' : styles.lowOpacity}`}
              src={webIcon}
              alt="web icon"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              <img
                src={linkIcon}
                alt="link icon"
                loading="lazy"
                className={`${showDetails ? '' : styles.hidden}`}
              />
              {link}
            </span>
          </a>
        </div>
        <div className={styles.public}>
          <a href={linkedIn} target="_blank" className={styles.detail}>
            <img
              className={`${styles.icon} ${showDetails ? '' : styles.lowOpacity}`}
              src={linkedinIcon}
              alt="email"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              <img
                className={`${showDetails ? '' : styles.hidden}`}
                src={linkIcon}
                alt="link icon"
                loading="lazy"
              />
              {linkedIn}
            </span>
          </a>
        </div>
      </div>
      {!showDetails && (
        <button onClick={toggleDetailsBtn} className={styles.button}>
          להציג פרטי תקשורת
        </button>
      )}
    </div>
  );
};

export default ContactDetails;
