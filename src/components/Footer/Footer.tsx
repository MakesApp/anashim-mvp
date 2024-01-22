import styles from './Footer.module.css';
import companiesLogos from '@assets/icons/companiesLogos.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={companiesLogos} alt="Companies' Logos" loading="lazy" />
    </footer>
  );
};

export default Footer;
