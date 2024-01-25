import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './searchProduct.module.css';
import sortProductsByDate from '@/utils/sortProductsByDate';
import { prodcuts } from '@/data';
import SearchFilterBar from '../Home/components/SearchFilterBar/SearchFilterBar';

const SearchProduct: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [queryForSearchBar, setQueryForSearchBar] = useState<string>('');
  const [filtersForSearchBar, setFiltersForSearchBar] = useState<any>([]);
  // const [filters, setFilters] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    interface FilterMapping {
      [key: string]: string;
    }
    const filterMapping: FilterMapping = {
      'סוג המוצר': 'type',
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

    const updatedFilteredProducts = filterProducts(prodcuts, filters, searchQuery);
    const sortProducts = sortProductsByDate(updatedFilteredProducts);
    setFilteredProducts(sortProducts);
  }, [searchParams]);

  const filterProducts = (products: any, filters: any, searchQuery: any) => {
    return products.filter((product: any) => {
      for (const [filterType, filterValues] of Object.entries(filters) as any) {
        if (filterType === 'type' && !filterValues.includes(product.type)) {
          return false;
        }
        if (filterType === 'sector' && !filterValues.includes(product.sector)) {
          return false;
        }
        if (
          filterType === 'fields' &&
          !product.fields.some((field: any) => filterValues.includes(field))
        ) {
          return false;
        }
      }
      if (searchQuery?.length) {
        const nameMatches = product.name.toLowerCase().startsWith(searchQuery);
        const descriptionMatches = product.shortDescription
          .toLowerCase()
          .includes(searchQuery);
        return descriptionMatches || nameMatches;
      }
      return true;
    });
  };

  return (
    <div>
      <div className={styles.filterBackground}>
        <div className={styles.searchWrapper}>
          <SearchFilterBar query={queryForSearchBar} filters={filtersForSearchBar} />
        </div>
      </div>
      <div>
        <div className={styles.resultNumber}>נמצאו {filteredProducts.length} תוצאות</div>
      </div>
      {searchParams.get('query') && (
        <div>
          <span>חיפשת</span>
          <span> "{searchParams.get('query')}"</span>
        </div>
      )}
      <ul className={styles.ul}>
        {filteredProducts.map((product: any, i: number) => {
          return (
            <li key={product.name} className={styles.li}>
              <ProductCard {...product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchProduct;
