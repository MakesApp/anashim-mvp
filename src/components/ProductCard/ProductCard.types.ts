import { iconsByName } from '@utils/constants';

export interface IProductCardProps {
  logo: string;
  tags: (keyof typeof iconsByName)[];
  name: string;
  quote: string;
  lastAdded: boolean;
}
