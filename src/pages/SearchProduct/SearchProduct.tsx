import React, { useEffect, useState } from 'react';
import { FilterMapping } from './SearchProduct.types';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './searchProduct.module.css';
import sortProductsByDate from '@/utils/sortProductsByDate';
import { articles, prodcuts } from '@/data';
import getManipulatedTags from '@/utils/getManipulatedTags';
import filterProducts from './utils/filterProducts';
import SearchFilterBar from '../Home/components/SearchFilterBar/SearchFilterBar';
import { useNavigate } from 'react-router-dom';
import QueryDetails from './Components/QueryDetails/QueryDetails';
import FilterDetails from './Components/FilterDetails/FilterDetails';
import NoResults from './Components/NoResult/NoResults';
import ProductsList from '../Home/components/ProductsList/ProductsList';
import ArticleSection from '@/components/ArticleSection/ArticleSection';

const SearchProduct: React.FC = () => {
  const article=articles[0]
  const [queryForSearchBar, setQueryForSearchBar] = useState<string>('');
  const [filtersForSearchBar, setFiltersForSearchBar] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const filterMapping: FilterMapping = {
      סוג: 'type',
      תחום: 'fields',
      מגזר: 'sector',
    };
    let filters: any = {};
    let searchQuery = '';
    const filterArrayForSearchBar = [] as any;

    searchParams.forEach((value, key) => {
      if (key !== 'query') {
        const filterKey = `${key}:${value}`;
        filterArrayForSearchBar.push(filterKey);
        const englishKey = filterMapping[key] || key;
        if (!filters[englishKey]) {
          filters[englishKey] = [];
        }
        filters[englishKey].push(value);
      } else {
        searchQuery = value;
        setQueryForSearchBar(value);
      }
    });
    setFiltersForSearchBar(filterArrayForSearchBar);

    if (Object.keys(filters).length > 0) {
      const tags = getManipulatedTags({
        fields: filters?.fields,
        sector: filters?.sector,
        type: filters.type,
      });

      setTags(tags);
    }

    const updatedFilteredProducts = filterProducts(prodcuts, filters, searchQuery);
    const sortProducts = sortProductsByDate(updatedFilteredProducts);
    setFilteredProducts(sortProducts);
  }, [searchParams]);

  const handleRemoveTag = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams();

    // Rebuilding the search parameters excluding the one to be removed
    for (const [paramKey, paramValue] of searchParams) {
      if (paramKey !== key || paramValue !== value) {
        newSearchParams.append(paramKey, paramValue);
      }
    }

    // Navigating to the updated URL
    navigate(`?${newSearchParams.toString()}`);

    // Updating local state
    const tagToRemove = `${key}:${value}`;
    setFiltersForSearchBar(filtersForSearchBar.filter((tag: any) => tag !== tagToRemove));
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.hero}>
        <div className={styles.searchWrapper}>
          <SearchFilterBar query={queryForSearchBar} filters={filtersForSearchBar} />
        </div>
      </div>
      {filteredProducts.length?
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {searchParams.get('query') && filteredProducts.length > 0 && (
            <QueryDetails
              numOfProducts={filteredProducts.length}
              query={searchParams.get('query')}
            />
          )}
          {filtersForSearchBar.length > 0 && filteredProducts.length > 0 && (
            <FilterDetails
              tags={tags}
              numOfProducts={filteredProducts.length}
              handleRemoveTag={handleRemoveTag}
            />
          )}
  
        </div>
        <ul className={styles.ul}>
          {filteredProducts.map((product: any) => {
            return (
              <li key={product.name} className={styles.li}>
                <ProductCard {...product} />
              </li>
            );
          })}
        </ul>
      </div>
:      (
  <div className={styles.noResults_page}>
          <NoResults/>
          <ProductsList/>
            <ArticleSection article={article}/>
          </div>
          )
}
    </div>
  );
};

export default SearchProduct;
