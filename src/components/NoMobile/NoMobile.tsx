import styles from './NoMobile.module.css';
import anashimInnovationHubMobile from '@assets/mobile/icons/anashimHub.svg';
import anashimILMobile from '@assets/mobile/icons/anashimIL.svg';
import sadEmoji from '@assets/icons/sadEmoji.svg';
const NoMobile = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img loading="lazy" src={`${anashimILMobile}`} alt="anashimIL logo" />
        <img
          loading="lazy"
          src={`${anashimInnovationHubMobile}`}
          alt="anashimInnovationHub logo"
        />
      </header>
      <div className={styles.content}>
        <img src={sadEmoji} alt="sad emoji" loading="lazy" />
        <p className={styles.text}>הפלטפורמה כרגע תומכת רק בכניסה ממחשב ולא מסמאטרפון</p>
      </div>
    </div>
  );
};

export default NoMobile;
