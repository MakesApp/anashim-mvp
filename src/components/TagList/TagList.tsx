import Tag from '@components/Tag/Tag';
import styles from './TagList.module.css';
import { ITagListProps } from './TagList.types';

const TagList: React.FC<ITagListProps> = ({ manipulatedTags }) => {
  const [typeAndSectors, fields] = manipulatedTags;
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {typeAndSectors.map((tag:any) => (
          <li key={tag.text}>
            <Tag icon={tag.icon} text={tag.text} bgColor={tag.bgColor} />
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {fields.map((tag:any) => (
          <li key={tag.text}>
            <Tag icon={tag.icon} text={tag.text} bgColor={tag.bgColor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
