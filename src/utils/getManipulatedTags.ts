import { TagProps } from '@/components/Tag/Tag.types';
import { tags } from './constants';
import { Field, Sector, Type } from './enum';

type Props = {
  fields: Field[];
  sector: Sector[];
  type: Type;
};

export default ({ fields, sector, type }: Props): [TagProps[], TagProps[]] => {
  const mapTagsToObjects = (
    tagCategory: 'sector' | 'fields' | 'type',
    tagValues: Field[] | Sector[],
  ) => {
    return tagValues.map((tagValue) => {
      const icon = tags[tagCategory].tagIcons[tagValue];
      const bgColor = tags[tagCategory].bgColor;
      return {
        bgColor,
        icon,
        text: tagValue,
      };
    });
  };

  const firstArray = [
    {
      bgColor: tags['type'].bgColor,
      icon: tags['type'].tagIcons[type],
      text: type,
    },
    ...mapTagsToObjects('sector', sector),
  ];

  const secondArray = mapTagsToObjects('fields', fields);

  return [firstArray, secondArray];
};
