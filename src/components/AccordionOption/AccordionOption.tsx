import React, { FC } from 'react';
import styles from './accordionOption.module.css';
import circle from '@assets/icons/circle.svg';
import circleFill from '@assets/icons/circle-filled.svg';
import { AccordionOptionProps } from './AccordionOption.types';
const AccordionOption: FC<AccordionOptionProps> = ({ name, isSelected, callback }) => {
  const icon = isSelected ? circleFill : circle;
  const color = isSelected ? 'var(--charcoal-gray)' : 'var(--gray)';
  return (
    <div className={styles.accordionOption__container}>
      <button onClick={() => callback(name)}>
        <img src={icon} alt="selection circle"></img>
      </button>
      <span style={{ color }}>{name}</span>
    </div>
  );
};
export default AccordionOption;
