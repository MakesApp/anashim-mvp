import anashimInnovationHub from '@assets/icons/anashimInnovationHub.svg';
import anashimInnovationHubMobile from '@assets/mobile/icons/header/anashimHub.svg';
import anashimIL from '@assets/icons/anashimIL.png';
// import anashimILMobile from '@assets/mobile/icons/anashimIL.svg';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.anashimIL}
        loading="lazy"
        src={anashimIL}
        alt="anashimIL logo"
      />
      <a href="/">
        <img
          loading="lazy"
          srcSet={`${anashimInnovationHubMobile} 250w, ${anashimInnovationHub} 373w`}
          sizes="(max-width: 768px) 250px, 373px"
          alt="anashimInnovationHub logo"
        />
      </a>
    </header>
  );
};

export default Header;
