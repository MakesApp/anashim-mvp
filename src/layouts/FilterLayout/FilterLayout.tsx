import { FC } from 'react';
import { FilterLayoutProps } from './FilterLayout.types';
import styles from './filterLayout.module.css';
const FilterLayout: FC<FilterLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      {children}
    </div>
  );
};
export default FilterLayout;
