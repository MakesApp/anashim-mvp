import appleseeds from '@assets/icons/footer/appleseeds.svg';
import innovationAuthority from '@assets/icons/footer/innovation-authority.svg';
import ministryOfEconomy from '@assets/icons/footer/ministry-of-economy.svg';
import nationalDigitalAgency from '@assets/icons/footer/national-digital-agency.svg';
import appleseedsMobile from '@assets/mobile/icons/footer/appleseeds.svg';
import innovationAuthorityMobile from '@assets/mobile/icons/footer/innovation-authority.svg';
import ministryOfEconomyMobile from '@assets/mobile/icons/footer/ministry-of-economy.svg';
import nationalDigitalAgencyMobile from '@assets/mobile/icons/footer/national-digital-agency.svg';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={appleseeds}
        alt="Innovation Authority Logo"
        srcSet={`${appleseeds} 1024w, ${appleseedsMobile} 768w`}
      />
      <img
        src={innovationAuthority}
        alt="Innovation Authority Logo"
        srcSet={`${innovationAuthority} 1024w, ${innovationAuthorityMobile} 768w`}
      />
      <img
        src={ministryOfEconomy}
        alt="Ministry of Economy Logo"
        srcSet={`${ministryOfEconomy} 1024w, ${ministryOfEconomyMobile} 768w`}
      />
      <img
        src={nationalDigitalAgency}
        alt="National Digital Agency Logo"
        srcSet={`${nationalDigitalAgency} 1024w, ${nationalDigitalAgencyMobile} 768w`}
      />
    </footer>
  );
};

export default Footer;
