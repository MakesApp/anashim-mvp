import styles from './Product.module.css';
import Ribbon from './components/Ribbon/Ribbon';
import React from 'react';
import { ProductProps } from './Product.types';
import { Link } from 'react-router-dom';

const Product: React.FC<ProductProps> = ({ id, lastAdded, children }) => {
  return (
    <Link className={styles.link} to={{ pathname: `/product/${id}` }}>
      {lastAdded && <Ribbon />}
      <div className={styles.container}>{children}</div>
    </Link>
  );
};

export default Product;
