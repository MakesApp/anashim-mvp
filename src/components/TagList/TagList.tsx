import Tag from '@components/Tag/Tag';
import styles from './TagList.module.css';
import getTagsIconByName from '@utils/getTagsIconByName';
import { tagsObj } from '@utils/constants';

const TagList: React.FC<{ tags: (keyof typeof tagsObj)[] }> = ({ tags }) => {
  const tagsWithAdditionalData = getTagsIconByName(tags);

  const typeAndSectorTags = tagsWithAdditionalData.filter(
    (tag) => tag.group === 'type' || tag.group === 'sector',
  );

  const fieldTags = tagsWithAdditionalData.filter((tag) => tag.group === 'field');

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {typeAndSectorTags.map((tag) => (
          <li key={tag.name}>
            <Tag icon={tag.icon} name={tag.text} bgColor={tag.bgColor} />
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {fieldTags.map((tag) => (
          <li key={tag.name}>
            <Tag icon={tag.icon} name={tag.text} bgColor={tag.bgColor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
