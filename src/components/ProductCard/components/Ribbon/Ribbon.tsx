import styles from './Ribbon.module.css';
import stars from '@assets/icons/stars.svg';

const Ribbon = () => {
  return (
    <div className={styles.ribbon}>
      <img loading="lazy" src={stars} alt="stars" />
      <span className={styles.text}>העדכנית ביותר</span>
    </div>
  );
};

export default Ribbon;
