import ProductCard from '../ProductCard/ProductCard';
import getLastFourProducts from '@utils/getLastAddedProducts';

const LatestFourProducts = () => {
  const lastFourProducts = getLastFourProducts();
  return (
    <ul>
      {[...lastFourProducts].map((p) => {
        return (
          <li key={p.id + p.name}>
            <ProductCard {...p} lastAdded={true} />
          </li>
        );
      })}
    </ul>
  );
};

export default LatestFourProducts;
