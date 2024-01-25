import ProductCard from '@components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import getLastFourProducts from '@utils/getLastAddedProducts';

const ProductsList = () => {
  const lastFourProducts = getLastFourProducts();
  return (
    <ul className={styles.list}>
      {[...lastFourProducts].map((p) => {
        return <ProductCard key={p.name} {...p} lastAdded={true} />;
      })}
    </ul>
  );
};

export default ProductsList;
