import { FC } from 'react';
import styles from './queryDetails.module.css';
import { QueryDetailsProps } from './QueryDetails.types';
const QueryDetails: FC<QueryDetailsProps> = ({ numOfProducts, query }) => {
  return (
    <div className={styles.searchedContainer}>
      <span className={styles.searched}>נמצאו {numOfProducts} תוצאות עבור</span>
      <span className={styles.searchQuery}> "{query}"</span>
    </div>
  );
};
export default QueryDetails;
