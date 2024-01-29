import styles from './Quote.module.css';
import quote from '@assets/icons/quote.svg';
import { IQuoteProps } from './Quote.types';
const Quote: React.FC<IQuoteProps> = ({ text }) => {
  return (
    <>
      <img className={styles.quoteIcon} src={quote} alt="quote" loading="lazy" />
      <p className={styles.text}>{text}</p>
    </>
  );
};

export default Quote;
