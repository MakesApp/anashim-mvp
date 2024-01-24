import { Product } from '@/localTypes/product.types';
import styles from './Card.module.css';
import ContactDetails from '../ContactDetails/ContactDetails';

const Card: React.FC<Product> = ({ logo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <img className={styles.logo} src={logo} alt="product logo" loading="lazy" />
        <ContactDetails />
      </div>
      <div className={styles.leftSide}></div>
    </div>
  );
};

export default Card;
