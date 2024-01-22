import anashimInnovationHub from '@assets/icons/anashimInnovationHub.svg';
import anashimIL from '@assets/icons/anashimIL.svg';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <img width="151" height="80" loading="lazy" src={anashimIL} alt="anashimIL logo" />
      <img
        loading="lazy"
        width="373"
        height="50"
        src={anashimInnovationHub}
        alt="anashimInnovationHub logo"
      />
    </header>
  );
};

export default Header;
