import styles from './Product.module.css';
import Ribbon from './components/Ribbon/Ribbon';
import React from 'react';
import { ProductProps } from './Product.types';
import ReactGA from 'react-ga4';
import { Link } from 'react-router-dom';

const Product: React.FC<ProductProps> = ({ id, lastAdded, children, name }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //prevent bubbling
    e.stopPropagation();
    ReactGA.event({
      category: 'Button Click',
      action: 'click_on_product_card_cta',
      label: `Product Name: ${name}`,
    });
  };
  return (
    <Link
      onClick={handleLinkClick}
      className={styles.link}
      to={{ pathname: `/product/${id}` }}
    >
      {lastAdded && <Ribbon />}
      <div className={styles.container}>{children}</div>
    </Link>
  );
};

export default Product;
