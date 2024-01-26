import styles from './ProductCard.module.css';
import Ribbon from './components/Ribbon/Ribbon';
import React from 'react';
import TagList from '../TagList/TagList';
import Quote from '../Quote/Quote';
import { ProductCardProps } from './ProductCard.types';
import getManipulatedTags from '@/utils/getManipulatedTags';

import { Link } from 'react-router-dom';
const ProductCard: React.FC<ProductCardProps> = ({
  logo,
  type,
  sector,
  fields,
  name,
  shortDescription,
  id,
  lastAdded,
}) => {
  const allTags = getManipulatedTags({ fields, sector, type });
  console.log({ allTags });
  //  const filterMapping: FilterMapping = {
  //    'סוג המוצר': 'type',
  //    תחום: 'fields',
  //    מגזר: 'sector',
  //  };
  const typeAndSectorTags = allTags.filter(
    (tag: any) => tag.name === 'סוג המוצר' || tag.name === 'מגזר',
  );
  const fieldTags = allTags.filter((tag: any) => tag.name === 'תחום');
  const tags = [typeAndSectorTags, fieldTags] as any;
  console.log({ tags });

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
          <TagList manipulatedTags={tags} />
        </div>
        <div className={styles.quoteContainer}>
          <Quote text={shortDescription} />
        </div>
        <div className={styles.infoBox}>למידע נוסף</div>
      </div>
    </Link>
  );
};

export default ProductCard;
