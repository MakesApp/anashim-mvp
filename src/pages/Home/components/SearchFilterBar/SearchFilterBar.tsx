import styles from './SearchFilterBar.module.css';
import React, { FC, useState } from 'react';
import FilterLayout from '@layouts/FilterLayout/FilterLayout';
import Accordion from '@components/Accordion/Accordion';
import AccordionOption from '@components/AccordionOption/AccordionOption';
import search from '@assets/icons/search.svg';
import { accordionItems } from './constants';

const SearchFilterBar = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const callback = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };
  const searchByFilter = () => {
    console.log(selected);
  };

  const searchByInput = () => {
    console.log('search by input');
  };

  return (
    <div>
      <FilterLayout title="חפש לפי סינון">
        <div className={styles.container}>
          {accordionItems.map((item) => (
            <Accordion key={item.title} title={item.title} width={item.width}>
              {item.options.map((option) => {
                const isSelected = selected.includes(option);
                return (
                  <AccordionOption
                    key={option}
                    name={option}
                    isSelected={isSelected}
                    callback={callback}
                  />
                );
              })}
            </Accordion>
          ))}
          <button onClick={searchByFilter}>
            <img src={search} alt="search" className={styles.searchIcon} />
          </button>
        </div>
      </FilterLayout>

      <FilterLayout title="חפש לפי הנחיה">
        <div className={styles.container}>
          <input
            type="text"
            className={styles.input}
            placeholder="חפש לפי שם מוצר, או תיאור"
          />
          <button onClick={searchByFilter}>
            <img src={search} alt="search" className={styles.searchIcon} />
          </button>
        </div>
      </FilterLayout>
    </div>
  );
};

export default SearchFilterBar;
