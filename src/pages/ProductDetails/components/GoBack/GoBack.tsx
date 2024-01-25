import { Link } from 'react-router-dom';
import styles from './GoBack.module.css';
import arrowLeft from '@assets/icons/arrowleft.svg';
const GoBack = () => {
  return (
    <Link to={'/'}>
      <div className={styles.container}>
        <img src={arrowLeft} alt="arrow left" loading="lazy" />
        <span className={styles.text}>חזור</span>
      </div>
    </Link>
  );
};

export default GoBack;
