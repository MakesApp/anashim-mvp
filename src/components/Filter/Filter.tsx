import React from 'react';
import Accordion from '@components/Accordion/Accordion';
import AccordionOption from '@components/AccordionOption/AccordionOption';

function Filter() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const accordionItems = [
    { title: 'סוג', width: '202', items: ['למידה', 'חינוך', 'התעסוקה'] },
  ];

  const callback = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  return (
    <>
      {accordionItems.map((item) => (
        <Accordion key={item.title} title={item.title} >
          {item.items.map((option) => {
            const isSelected = selected.includes(option);
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
    </>
  );
}

export default Filter;
