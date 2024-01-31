import Product from '@/components/Product/Product';
import CompanyName from '@/components/Product/components/CompanyName/CompanyName';
import InfoBox from '@/components/Product/components/InfoBox/InfoBox';
import Logo from '@/components/Product/components/Logo/Logo';
import Quote from '@/components/Product/components/Quote/Quote';
import TagList from '@/components/Product/components/TagList/TagList';
import { Product as ProductType } from '@/localTypes/product.types';
import getTags from '@/utils/getTags';
import styles from './ProductCard.module.css';

const ProductCard: React.FC<ProductType & { lastAdded?: boolean }> = ({
  lastAdded,
  id,
  shortDescription,
  logo,
  name,
  fields,
  sector,
  type,
}) => {
  const tags = getTags({ fields, sector, type });
  return (
    <Product id={id} lastAdded={lastAdded} name={name}>
      <div className={styles.imgContainer}>
        <Logo logo={logo} />
      </div>
      <div className={styles.textContainer}>
        <CompanyName name={name} lastAdded={lastAdded} />
      </div>
      <div className={styles.tagsContainer}>
        <TagList manipulatedTags={tags} />
      </div>
      <div className={styles.quoteContainer}>
        <Quote text={shortDescription} />
      </div>
      <div className={styles.infoBoxContainer}>
        <InfoBox text={'להציג מידע'} />
      </div>
    </Product>
  );
};

export default ProductCard;
