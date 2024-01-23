import { tagsObj } from '@utils/constants';

export interface IProductCardProps {
  logo: string;
  tags: (keyof typeof tagsObj)[];
  name: string;
  quote: string;
  lastAdded: boolean;
}
