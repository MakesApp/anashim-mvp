import ProductCard from '@components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import data from '../../../../data';

const ProductsList = () => {
  return (
    <ul className={styles.list}>
      {[...data.slice(0, 3)].map((p) => {
        return <ProductCard key={p.name} {...p} />;
      })}
    </ul>
  );
};

export default ProductsList;
