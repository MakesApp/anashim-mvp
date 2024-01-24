import styles from './SearchFilterBar.module.css';
import React, { FC, useState } from 'react';
import FilterLayout from '@layouts/FilterLayout/FilterLayout';
import Accordion from '@components/Accordion/Accordion';
import AccordionOption from '@components/AccordionOption/AccordionOption';
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

  return (
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
      </div>
    </FilterLayout>
  );
};

export default SearchFilterBar;
