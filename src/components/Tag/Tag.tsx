import styles from './Tag.module.css';
import { TagProps } from './Tag.types';

const Tag: React.FC<TagProps> = ({ isBig, text, icon, bgColor, children }) => {
  const fontStyle = isBig ? { fontSize: '15px' } : undefined;
  const iconStyle = isBig ? { width: '13px', height: '13px' } : undefined;
  return (
    <div className={styles.container} style={{ background: bgColor }}>
      {children}
      <img style={iconStyle} src={icon} alt="tag icon" loading="lazy" />
      <span style={fontStyle} className={styles.text}>
        {text}
      </span>
    </div>
  );
};

export default Tag;
