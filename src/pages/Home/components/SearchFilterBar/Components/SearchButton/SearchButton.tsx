import { FC } from 'react';
import searchIcon from '@assets/icons/search.svg';
import styles from './searchButton.module.css';
import { SearchButtonProps } from './SearchButton.types';
const SearchButton: FC<SearchButtonProps> = ({ callback }) => {
  return (
    <button className={styles.button} onClick={callback}>
      <img src={searchIcon} alt="search" />
    </button>
  );
};
export default SearchButton;
