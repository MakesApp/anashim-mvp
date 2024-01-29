import ProductCard from '@components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import getLastFourProducts from '@utils/getLastAddedProducts';

const ProductsList = () => {
  const lastFourProducts = getLastFourProducts();
  return (
    <ul className={styles.list}>
      {[...lastFourProducts].map((p) => {
        return (
          <li key={p.id + p.name} className={styles.listItem}>
            <ProductCard {...p} lastAdded={true} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
