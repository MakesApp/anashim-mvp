import { Product } from '@/localTypes/product.types';
import styles from './CardMobile.module.css';
import Logo from '@/components/Product/components/Logo/Logo';
import CompanyName from '@/components/Product/components/CompanyName/CompanyName';
import TagList from '@/components/Product/components/TagList/TagList';
import getTags from '@/utils/getTags';
import Quote from '@/components/Product/components/Quote/Quote';
import ContactDetails from '../ContactDetails/ContactDetails';
const CardMobile: React.FC<Product> = ({
  logo,
  name,
  shortDescription,
  sector,
  type,
  fields,
  description,
  email,
  phone,
  link,
  linkedIn,
}) => {
  const tags = getTags({ sector, type, fields });
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo logo={logo} />
      </div>
      <CompanyName name={name} />
      <p className={styles.shortDescription}>{shortDescription}</p>
      <div className={styles.tagsContainer}>
        <TagList manipulatedTags={tags} />
      </div>
      <div className={styles.quoteContainer}>
        <Quote text={description} />
      </div>
      <ContactDetails
        name={name}
        email={email}
        phone={phone}
        linkedIn={linkedIn}
        link={link}
      />
    </div>
  );
};

export default CardMobile;
