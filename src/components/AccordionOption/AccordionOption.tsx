import React, { FC } from 'react';
import circle from '@assets/icons/circle.svg';
import circleFill from '@assets/icons/circle-filled.svg';
import { AccordionOptionProps } from './AccordionOption.types';
const AccordionOption: FC<AccordionOptionProps> = ({ name, isSelected, callback }) => {
  const icon = isSelected ? circleFill : circle;
  return (
    <div>
      <button onClick={() => callback(name)}>
        <img src={icon} alt="selection circle"></img>
      </button>
      <span>{name}</span>
    </div>
  );
};
export default AccordionOption;
