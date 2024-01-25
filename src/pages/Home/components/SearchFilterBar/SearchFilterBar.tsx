import styles from './SearchFilterBar.module.css';
import React, { FC, useState, useEffect } from 'react';
import FilterLayout from '@layouts/FilterLayout/FilterLayout';
import Accordion from '@components/Accordion/Accordion';
import { useNavigate } from 'react-router-dom';
import AccordionOption from '@components/AccordionOption/AccordionOption';
import { SearchFilterBarProps } from './SearchFilterBar.types';
import searchIcon from '@assets/icons/search.svg';
import { accordionItems } from './constants';

const SearchFilterBar: FC<SearchFilterBarProps> = ({ filters, query }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (filters) {
      setSelected(filters);
    }
    if (query) {
      setSearch(query);
    }
  }, [filters, query]);

  const rulesForFilters: any = {
    'סוג המוצר': { maxSelections: 1 },
    מגזר: { maxSelections: 2 },
  };

  const callback = (title: string, name: string) => {
    const filterKey = `${title}:${name}`;
    const rule = rulesForFilters[title];
    if (rule) {
      const { maxSelections } = rule;
      const currentSelections = selected.filter((item) => item.startsWith(`${title}:`));
      if (selected.includes(filterKey)) {
        setSelected(selected.filter((item) => item !== filterKey));
      } else if (currentSelections.length < maxSelections) {
        setSelected([...selected, filterKey]);
      }
    } else {
      if (selected.includes(filterKey)) {
        setSelected(selected.filter((item) => item !== filterKey));
      } else {
        setSelected([...selected, filterKey]);
      }
    }
  };

  const searchByFilter = () => {
    const queryParams = selected
      .map((filter) => {
        const [title, name] = filter.split(':');
        return `${title}=${encodeURIComponent(name)}`;
      })
      .join('&');

    navigate(`/search?${queryParams}`);
  };

  const searchByInput = () => {
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <>
      <FilterLayout title="חפש לפי סינון">
        <div className={styles.wrapper}>
          {accordionItems.map((item) => (
            <Accordion key={item.title} title={item.title} width={item.width}>
              {item.options.map((option) => {
                const filterValue = `${item.title}:${option}`;

                const isSelected = selected.includes(filterValue);
                return (
                  <AccordionOption
                    key={option}
                    name={option}
                    title={item.title}
                    isSelected={isSelected}
                    callback={callback}
                  />
                );
              })}
            </Accordion>
          ))}
          <button onClick={searchByFilter} className={styles.searchIcon}>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </FilterLayout>

      <FilterLayout title="חפש לפי הנחיה">
        <div className={styles.wrapper}>
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            value={search}
            type="text"
            className={styles.input}
            placeholder="חפש לפי שם מוצר, או תיאור"
          />
          <button onClick={searchByInput}>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </FilterLayout>
    </>
  );
};

export default SearchFilterBar;
