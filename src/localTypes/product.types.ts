import { Field, Sector, Type } from '@utils/enum';

export type Product = {
  id: string;
  name: string;
  type: Type;
  sector: Sector[];
  fields: Field[];
  phone: string;
  email: string;
  shortDescription: string;
  description: string;
  link: string;
  logo: string;
  linkedIn: string;
  date: string;
  tempVariable?: boolean;
};
