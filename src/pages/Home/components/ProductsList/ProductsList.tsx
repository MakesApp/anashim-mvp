import React, { useEffect, useState } from 'react';
import ProductCard from '@components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import getLastFourProducts from '@utils/getLastAddedProducts';
import { Product } from '@/localTypes/product.types';

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log('im here');
    const lastFourProducts = getLastFourProducts();
    console.log({ lastFourProducts });
    setProducts(lastFourProducts);
  }, []);

  return (
    <ul className={styles.list}>
      {[...products].map((p) => {
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
