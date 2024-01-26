import { TagProps } from '@/components/Tag/Tag.types';
import { tags } from './constants';
import { Field, Sector, Type } from './enum';

type Props = {
  fields: Field[];
  sector: Sector[];
  type: Type;
};

export default ({ fields, sector, type }: Props): TagProps[] => {
  const mapTagsToObjects = (
    tagCategory: 'sector' | 'fields' | 'type',
    tagValues: Field[] | Sector[] | Type[],
  ) => {
    return tagValues.map((tagValue) => {
      const tagInfo = tags[tagCategory];
      return {
        bgColor: tagInfo.bgColor,
        icon: tagInfo.tagIcons[tagValue],
        text: Array.isArray(tagValue) ? tagValue.join(', ') : tagValue,
        closeColor: tagInfo.closeColor,
        name: tagInfo.name,
      };
    });
  };

  const allTags = [
    ...(type ? mapTagsToObjects('type', [type]) : []),
    ...mapTagsToObjects('sector', sector),
    ...mapTagsToObjects('fields', fields),
  ];

  return allTags;
};
