import styles from './ProductCardMobile.module.css';
import React from 'react';
import TagList from '@/components/Product/components/TagList/TagList';
import Quote from '@/components/Product/components/Quote/Quote';
import Product from '@/components/Product/Product';
import getTags from '@/utils/getTags';
import { Product as ProductType } from '@/localTypes/product.types';
import CompanyName from '@/components/Product/components/CompanyName/CompanyName';
import Logo from '@/components/Product/components/Logo/Logo';
import InfoBox from '@/components/Product/components/InfoBox/InfoBox';
const ProductCardMobile: React.FC<ProductType & { lastAdded?: boolean }> = ({
  logo,
  type,
  sector,
  fields,
  name,
  shortDescription,
  id,
  lastAdded,
}) => {
  const tags = getTags({ sector, fields, type });
  return (
    <Product id={id} lastAdded={lastAdded}>
      <div className={`${styles.row}  ${styles.logoContainer}`}>
        <div className={styles.textContainer}>
          <CompanyName lastAdded={lastAdded} name={name} />
        </div>
        <Logo logo={logo} />
      </div>
      <div className={styles.quoteContainer}>
        <Quote text={shortDescription} />
      </div>
      <div className={styles.row}>
        <div className={styles.tagsContainer}>
          <TagList manipulatedTags={tags} />
        </div>

        <div className={styles.infoBoxContainer}>
          <InfoBox text={'להציג מידע'} />
        </div>
      </div>
    </Product>
  );
};

export default ProductCardMobile;
