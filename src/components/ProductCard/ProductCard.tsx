import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import Ribbon from './components/Ribbon/Ribbon';
import React from 'react';
import TagList from './components/TagList/TagList';
import Quote from './components/Quote/Quote';
import { Product } from 'src/localTypes/product.types';
const ProductCard: React.FC<Product> = ({
  logo,
  type,
  sector,
  fields,
  name,
  shortDescription,
}) => {
  const lastAdded = true;
  const tags = [...fields, type, sector];
  return (
    <Link className={styles.link} to={{ pathname: '/' }}>
      <Ribbon />
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt={logo + ' logo'} />
        <div className={styles.textContainer}>
          <h3 className={styles.companyName}>{name}</h3>
          {lastAdded && <span className={styles.lastAdded}>נוספו לאחרונה</span>}
        </div>
        <TagList tags={tags} />
        <Quote text={shortDescription} />
        <div className={styles.infoBox}>להציג מידע</div>
      </div>
    </Link>
  );
};

export default ProductCard;
