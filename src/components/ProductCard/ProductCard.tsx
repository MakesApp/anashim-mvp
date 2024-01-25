import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import Ribbon from './components/Ribbon/Ribbon';
import React from 'react';
import TagList from '../TagList/TagList';
import Quote from '../Quote/Quote';
import { Product } from 'src/localTypes/product.types';
const ProductCard: React.FC<Product> = ({
  logo,
  type,
  sector,
  fields,
  name,
  shortDescription,
  id,
}) => {
  const lastAdded = true;
  const tags = [...fields, type, sector];
  return (
    <Link className={styles.link} to={{ pathname: `/product/${id}` }}>
      <Ribbon />
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt={logo + ' logo'} loading="lazy" />
        <div className={styles.textContainer}>
          <h3 className={styles.companyName}>{name}</h3>
          {lastAdded && <span className={styles.lastAdded}>נוספו לאחרונה</span>}
        </div>
        <div className={styles.tagsContainer}>
          <TagList tags={tags} />
        </div>
        <div className={styles.quoteContainer}>
          <Quote text={shortDescription} />
        </div>
        <div className={styles.infoBox}>להציג מידע</div>
      </div>
    </Link>
  );
};

export default ProductCard;
