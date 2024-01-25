export interface AccordionOptionProps {
  name: string;
  isSelected: boolean;
  title: string;
  callback: (title: string, name: string) => void;
}
