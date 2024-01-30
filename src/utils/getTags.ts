import getManipulatedTags from './getManipulatedTags';
import { Field, Sector, Type } from './enum';
type Props = {
  fields: Field[] | undefined;
  sector: Sector[] | undefined;
  type: Type | undefined;
};

export default ({ fields, sector, type }: Props) => {
  const allTags: any = getManipulatedTags({ fields, sector, type });
  const typeAndSectorTags = allTags.filter(
    (tag: any) => tag.name === 'סוג' || tag.name === 'מגזר',
  );
  const fieldTags = allTags.filter((tag: any) => tag.name === 'תחום');
  return [typeAndSectorTags, fieldTags];
};
