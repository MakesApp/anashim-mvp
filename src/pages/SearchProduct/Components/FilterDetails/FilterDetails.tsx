/// <reference types="vite-plugin-svgr/client" />
import styles from './filterDetails.module.css';
import { FC } from 'react';
import Tag from '@/components/Tag/Tag';
import CloseIcon from '@assets/icons/close.svg?react';
import { FilterDetailsProps } from './FilterDetails.types';

const FilterDetails: FC<FilterDetailsProps> = ({
  tags,
  numOfProducts,
  handleRemoveTag,
}) => {
  return (
    <>
      <div className={styles.filteredSearch}>נמצאו {numOfProducts} תוצאות</div>
      <div className={styles.tagsContainer}>
        {tags.map((tag: any, i: number) => {
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
  );
};
export default FilterDetails;
