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

  //  const filterMapping: FilterMapping = {
  //    'סוג המוצר': 'type',
  //    תחום: 'fields',
  //    מגזר: 'sector',
  //  };
  const typeAndSectorTags = allTags.filter(
    (tag: any) => tag.name === 'סוג' || tag.name === 'מגזר',
  );
  const fieldTags = allTags.filter((tag: any) => tag.name === 'תחום');
  const tags = [typeAndSectorTags, fieldTags] as any;

  const handleLinkClick = () => {
    window.gtag &&
      window.gtag('event', 'click_on_product_card_cta', {
        event_category: 'Button Click',
        event_label: 'Click on product card CTA',
        value: name,
      });
  };

  return (
    <Link
      onClick={handleLinkClick}
      className={styles.link}
      to={{ pathname: `/product/${id}` }}
    >
      {lastAdded && <Ribbon />}
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
        <div className={styles.infoBox}>להציג מידע</div>
      </div>
    </Link>
  );
};

export default ProductCard;
