export interface AccordionOptionProps {
  name: string;
  isSelected: boolean;
  callback: (name: string) => void;
}
