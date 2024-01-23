import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import Ribbon from './components/Ribbon/Ribbon';
import React from 'react';
import { IProductCardProps } from './ProductCard.types';
import TagList from './components/TagList/TagList';
import Quote from './components/Quote/Quote';
const ProductCard: React.FC<IProductCardProps> = ({
  logo,
  tags,
  name,
  quote,
  lastAdded,
}) => {
  return (
    <Link className={styles.link} to={{ pathname: '/' }}>
      <Ribbon />
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt={logo + ' logo'} />
        <h3 className={styles.companyName}>{name}</h3>
        {lastAdded && <span className={styles.lastAdded}>{name}</span>}
        <TagList tags={tags} />
        <Quote text={quote} />
      </div>
    </Link>
  );
};

export default ProductCard;
