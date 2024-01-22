import styles from './Tag.module.css';
import { AdditionalProps, TagProps } from './Tag.types';

const Tag: React.FC<TagProps & AdditionalProps> = ({ name, icon, bgColor }) => {
  return (
    <div className={styles.container} style={{ background: bgColor }}>
      <img className={styles.icon} src={icon} alt="tag icon" />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default Tag;
