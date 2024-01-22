import Tag from '@components/Tag/Tag';
import styles from './TagList.module.css';
import getTagsIconByName from '@utils/getTagsIconByName';
import { iconsByName } from '@utils/constants';
const TagList: React.FC<{ tags: (keyof typeof iconsByName)[] }> = ({ tags }) => {
  const tagsWithAdditionalData = getTagsIconByName(tags);

  return (
    <ul className={styles.list}>
      {tagsWithAdditionalData.map((tag) => (
        <li key={tag.name}>
          <Tag {...tag} icon={''} />
        </li>
      ))}
    </ul>
  );
};

export default TagList;
