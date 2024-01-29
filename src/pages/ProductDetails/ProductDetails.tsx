import styles from './ProductDetails.module.css';
import bgImg from '@assets/images/bg_productD.png';
import GoBack from './components/GoBack/GoBack';
import Card from './components/Card/Card';
import { useParams } from 'react-router';
import getProductById from '@/utils/getProductById';
const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;
  const product = getProductById(productId);
  return (
    <main className={styles.container}>
      <img className={styles.bgImg} aria-hidden="true" src={bgImg} alt="hero img" />
      {!product ? (
        <></>
      ) : (
        <div className={styles.content}>
          <GoBack />
          <Card {...product} />
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
