import ProductCard from '@components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import ag from '@assets/icons/ag.svg';

const ProductsList = () => {
  return (
    <ul className={styles.list}>
      <ProductCard
        logo={ag}
        name="Anashim IL"
        lastAdded={true}
        quote="רשות החדשנות מקדמת את החדשנות בתעשייה הישראלית, בדגש על תעשיית ההייטק , ולרבות תעשיית היצור."
        tags={['מיזם', 'חינוך', 'למידה', 'תעסוקה', 'ציבורי']}
      />
      <ProductCard
        logo={ag}
        name="Anashim IL"
        quote="רשות החדשנות מקדמת את החדשנות בתעשייה הישראלית, בדגש על תעשיית ההייטק , ולרבות תעשיית היצור."
        tags={['מיזם']}
      />
    </ul>
  );
};

export default ProductsList;
