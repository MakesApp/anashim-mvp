/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './searchProduct.module.css';
import sortProductsByDate from '@/utils/sortProductsByDate';
import { prodcuts } from '@/data';
import getManipulatedTags from '@/utils/getManipulatedTags';
import { TagProps } from '../../components/Tag/Tag.types';
import SearchFilterBar from '../Home/components/SearchFilterBar/SearchFilterBar';
//import from asserts close.svg as react component
import CloseIcon from '@assets/icons/close.svg?react';
import Tag from '@/components/Tag/Tag';
import { useNavigate } from 'react-router-dom';

const SearchProduct: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [queryForSearchBar, setQueryForSearchBar] = useState<string>('');
  const [filtersForSearchBar, setFiltersForSearchBar] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  // const [filters, setFilters] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    interface FilterMapping {
      [key: string]: string;
    }
    const filterMapping: FilterMapping = {
      'סוג': 'type',
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
    console.log({ filters });
    if (Object.keys(filters).length > 0) {
      const { fields = [], sector = [], type = [] } = filters;
      console.log({ fields, sector, type });
      const tagsTuple: [TagProps[], TagProps[]] = getManipulatedTags({
        fields,
        sector,
        type,
      });
      console.log({ type });
      console.log({ fields });
      console.log({ sector });
      console.log({ tagsTuple });
      const combinedTags = [...tagsTuple[0], ...tagsTuple[1]];
      setTags(combinedTags);
    }

    const updatedFilteredProducts = filterProducts(prodcuts, filters, searchQuery);
    const sortProducts = sortProductsByDate(updatedFilteredProducts);
    setFilteredProducts(sortProducts);
  }, [searchParams]);

  const handleRemoveTag = (key: string, value: string) => {
    console.log({ key, value });
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

  const filterProducts = (products: any, filters: any, searchQuery: any) => {
    return products.filter((product: any) => {
      for (const [filterType, filterValues] of Object.entries(filters) as any) {
        if (filterType === 'type' && !filterValues.includes(product.type)) {
          return false;
        }
        if (
          filterType === 'sector' &&
          !product.sector.some((sector: any) => filterValues.includes(sector))
        ) {
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
    <>
      <div className={styles.hero}>
        <div className={styles.searchWrapper}>
          <SearchFilterBar query={queryForSearchBar} filters={filtersForSearchBar} />
        </div>
      </div>
      < div className={styles.wrapper}>
      <div className={styles.container}>
        {searchParams.get('query') && (
          <div className={styles.searchedContainer}>
            <span className={styles.searched}>
              נמצאו {filteredProducts.length} תוצאות עבור
            </span>
            <span className={styles.searchQuery}> "{searchParams.get('query')}"</span>
          </div>
        )}
        {filtersForSearchBar.length > 0 && (
          <>
            <div className={styles.filteredSearch}>
              נמצאו {filteredProducts.length} תוצאות
            </div>
            <div className={styles.tagsContainer}>
              {tags.map((tag: any, i: number) => {
                console.log({ tag });
                return (
                  <Tag
                    key={i}
                    isBig={true}
                    text={tag.text}
                    icon={tag.icon}
                    bgColor={tag.bgColor}
                  >
                    <button
                      className={styles.button}
                      onClick={() => handleRemoveTag(tag.name, tag.text)}
                    >
                      <CloseIcon fill={tag.closeColor} />
                    </button>
                  </Tag>
                );
              })}
            </div>
          </>
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
    </>
  );
};

export default SearchProduct;
