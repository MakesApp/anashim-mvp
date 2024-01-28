import anashimInnovationHub from '@assets/icons/anashimInnovationHub.svg';
import anashimInnovationHubMobile from '@assets/mobile/icons/anashimHub.svg';
import anashimIL from '@assets/icons/anashimIL.svg';
import anashimILMobile from '@assets/mobile/icons/anashimIL.svg';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
  <img
  loading="lazy"
  srcSet={`${anashimILMobile} 88w, ${anashimIL} 151w`}
  sizes="(max-width: 768px) 88px, 151px"
  alt="anashimIL logo"
/>
<img
  loading="lazy"
  srcSet={`${anashimInnovationHubMobile} 268w, ${anashimInnovationHub} 373w`}
  sizes="(max-width: 768px) 268px, 373px"
  alt="anashimInnovationHub logo"
/>

    </header>
  );
};

export default Header;
