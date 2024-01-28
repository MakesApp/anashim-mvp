import { Product } from '@/localTypes/product.types';
import styles from './Card.module.css';
import ContactDetails from '../ContactDetails/ContactDetails';
import TagList from '@/components/TagList/TagList';
import Quote from '@/components/Quote/Quote';
import getManipulatedTags from '@/utils/getManipulatedTags';

const Card: React.FC<Product> = ({
  logo,
  email,
  link,
  linkedIn,
  phone,
  name,
  shortDescription,
  sector,
  fields,
  description,
  type,
}) => {
 const allTags = getManipulatedTags({ fields, sector, type });

  const typeAndSectorTags = allTags.filter(
    (tag: any) => tag.name === 'סוג' || tag.name === 'מגזר',
  );
  const fieldTags = allTags.filter((tag: any) => tag.name === 'תחום');
  const tags = [typeAndSectorTags, fieldTags] as any;
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="product logo" loading="lazy" />
        </div>
        <ContactDetails email={email} phone={phone} linkedIn={linkedIn} link={link} />
      </div>
      <div className={styles.leftSide}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.shortDescription}>{shortDescription}</p>
        <div className={styles.tagsContainer}>
          <TagList manipulatedTags={tags} />
        </div>
        <div className={styles.quoteContainer}>
          <Quote text={description} />
        </div>
      </div>
    </div>
  );
};

export default Card;
