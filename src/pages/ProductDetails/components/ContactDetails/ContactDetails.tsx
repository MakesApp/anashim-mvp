import { useState } from 'react';
import emailIcon from '@assets/icons/contact/email.png';
import linkedinIcon from '@assets/icons/contact/linkedin.png';
import telIcon from '@assets/icons/contact/tel.png';
import webIcon from '@assets/icons/contact/web.png';
import styles from './ContactDetails.module.css';
import linkIcon from '@assets/icons/link.svg';
import { IContactDetailsProps } from './ContactDetails.type';
import ReactGA from 'react-ga4';

const ContactDetails: React.FC<IContactDetailsProps> = ({
  name,
  phone,
  link,
  linkedIn,
  email,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetailsBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowDetails((prevState) => !prevState);

    ReactGA.event({
      category: 'Button Click',
      action: 'click_on_product_details_cta',
      label: `Product Name: ${name}`,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        {phone && (
          <div className={styles.detail}>
            <img
              className={`${styles.icon} ${styles.phone} ${showDetails ? '' : styles.lowOpacity}`}
              src={telIcon}
              alt="phone"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              {phone}
            </span>
          </div>
        )}
        {email && (
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
        )}
        {link && (
          <a href={link} target="_blank" className={styles.detail}>
            <img
              className={`${styles.icon} ${showDetails ? '' : styles.lowOpacity}`}
              src={webIcon}
              alt="web icon"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              <span> {link}</span>
              <img
                src={linkIcon}
                alt="link icon"
                loading="lazy"
                className={`${showDetails ? '' : styles.hidden}`}
              />
            </span>
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn} target="_blank" className={styles.detail}>
            <img
              className={`${styles.icon} ${showDetails ? '' : styles.lowOpacity}`}
              src={linkedinIcon}
              alt="email"
              loading="lazy"
            />
            <span className={`${styles.name}  ${showDetails ? '' : styles.hidden}`}>
              <span>{linkedIn}</span>
              <img
                className={`${showDetails ? '' : styles.hidden}`}
                src={linkIcon}
                alt="link icon"
                loading="lazy"
              />
            </span>
          </a>
        )}
      </div>
      {!showDetails && (
        <button onClick={(e) => toggleDetailsBtn(e)} className={styles.button}>
          להציג פרטי התקשרות
        </button>
      )}
    </div>
  );
};

export default ContactDetails;
