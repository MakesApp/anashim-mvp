import styles from './Quote.module.css';
import quote from '@assets/icons/quote.svg';
import { IQuoteProps } from './Quote.types';
import parse from 'html-react-parser';

const Quote: React.FC<IQuoteProps> = ({ text }) => {
  return (
    <>
      <img className={styles.quoteIcon} src={quote} alt="quote" loading="lazy" />
      <p className={styles.text}>{parse(text)}</p>
    </>
  );
};

export default Quote;
