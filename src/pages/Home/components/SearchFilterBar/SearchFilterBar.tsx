import styles from './SearchFilterBar.module.css';
import { FC, useState, useEffect } from 'react';
import FilterLayout from '@layouts/FilterLayout/FilterLayout';
import Accordion from '@components/Accordion/Accordion';
import SearchButton from './Components/SearchButton/SearchButton';
import { useNavigate } from 'react-router-dom';
import AccordionOption from '@components/AccordionOption/AccordionOption';
import { SearchFilterBarProps } from './SearchFilterBar.types';
import { accordionItems } from './constants';

const SearchFilterBar: FC<SearchFilterBarProps> = ({
  filters,
  query,
  children,
  showFullSearch = true,
}) => {
  const [filtersSelected, setFiltersSelected] = useState<string[]>([]);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    if (filters) {
      setFiltersSelected(filters);
    }
    if (query) {
      setSearch(query);
    }
  }, [filters, query]);

  const handleAccordionChange = (itemValue: string) => {
    setOpenItem(openItem === itemValue ? null : itemValue);
  };

  const rulesForFilters: any = {
    סוג: { maxSelections: 1 },
    מגזר: { maxSelections: 2 },
  };
  const handleFilterChange = (title: string, name: string) => {
    const filterKey = `${title}:${name}`;
    const rule = rulesForFilters[title];
    const maxSelections = rule?.maxSelections ?? Infinity;
    const currentSelections = filtersSelected.filter((item) =>
      item.startsWith(`${title}:`),
    );

    if (filtersSelected.includes(filterKey)) {
      setFiltersSelected(filtersSelected.filter((item) => item !== filterKey));
    } else if (currentSelections.length < maxSelections) {
      setFiltersSelected((prev) => [...prev, filterKey]);
    }
  };

  const searchByFilter = () => {
    setOpenItem(null);
    const queryParams = filtersSelected
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
      <FilterLayout title="חיפוש לפי סינון">
        <div className={styles.wrapper}>
          {accordionItems.map((item) => (
            <Accordion
              openItem={openItem}
              handleAccordionChange={handleAccordionChange}
              key={item.title}
              title={item.title}
            >
              {item.options.map((option) => {
                const filterValue = `${item.title}:${option}`;

                const isSelected = filtersSelected.includes(filterValue);
                return (
                  <AccordionOption
                    key={option}
                    name={option}
                    title={item.title}
                    isSelected={isSelected}
                    callback={handleFilterChange}
                  />
                );
              })}
            </Accordion>
          ))}
          <SearchButton callback={searchByFilter} />
        </div>
      </FilterLayout>

      {showFullSearch && (
        <FilterLayout title="חיפוש לפי הנחיה">
          <div className={styles.wrapper}>
            <input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              value={search}
              type="text"
              className={styles.input}
              placeholder="חיפוש לפי שם או תיאור"
            />
            <SearchButton callback={searchByInput} />
          </div>
        </FilterLayout>
      )}
      {children}
    </>
  );
};

export default SearchFilterBar;
