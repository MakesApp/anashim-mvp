import { Product } from '@/localTypes/product.types';
import styles from './Card.module.css';
import ContactDetails from '../ContactDetails/ContactDetails';
import TagList from '@/components/Product/components/TagList/TagList';
import Logo from '@/components/Product/components/Logo/Logo';
import CompanyName from '@/components/Product/components/CompanyName/CompanyName';
import getTags from '@/utils/getTags';
import Quote from '@/components/Product/components/Quote/Quote';

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
  const tags = getTags({ fields, sector, type });
  return (
    <div className={styles.container}>
      <div className={styles.rightSide}>
        <div className={styles.logoContainer}>
          <Logo logo={logo} />
        </div>
        <ContactDetails
          name={name}
          email={email}
          phone={phone}
          linkedIn={linkedIn}
          link={link}
        />
      </div>
      <div className={styles.leftSide}>
        <CompanyName name={name} />
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
