import { FC } from 'react';
import { FilterLayoutProps } from './FilterLayout.types';
import styles from './filterLayout.module.css';
import filterBackGround from '@assets/images/filter-background.png';
const FilterLayout: FC<FilterLayoutProps> = ({ title, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${filterBackGround})`,
  };
  return (
    <div className={styles.container} style={backgroundStyle}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
export default FilterLayout;
