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
      const closeColor = tags[tagCategory].closeColor;
      const name = tags[tagCategory].name;

      return {
        bgColor,
        icon,
        text: tagValue,
        closeColor,
        name,
      };
    });
  };

  const firstArray = [
    ...(type &&
    tags['type'] &&
    tags['type'].name &&
    tags['type'].bgColor &&
    tags['type'].tagIcons[type] &&
    tags['type'].closeColor
      ? [
          {
            name: tags['type'].name,
            bgColor: tags['type'].bgColor,
            icon: tags['type'].tagIcons[type],
            text: type[0],
            closeColor: tags['type'].closeColor,
          },
        ]
      : []),
    ...mapTagsToObjects('sector', sector),
  ];

  const secondArray = mapTagsToObjects('fields', fields);

  return [firstArray, secondArray];
};
