import styles from './Tag.module.css';
import { TagProps } from './Tag.types';

const Tag: React.FC<TagProps> = ({ text, icon, bgColor }) => {
  return (
    <div className={styles.container} style={{ background: bgColor }}>
      <img className={styles.icon} src={icon} alt="tag icon" loading="lazy" />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Tag;
