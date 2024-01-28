import styles from './NoResults.module.css'
import sadEmoji from '@assets/icons/sadEmoji.svg'

const NoResults = () => {
  return (
   <div className={styles.noResults}>
              <img src={sadEmoji} alt='sad emoji'/>
              <h2 className={styles.noResults_title}>לא נמצאו תוצאות חיפוש</h2>
              <p className={styles.noResults_text}>נסה לחפש שוב לפי סינון אחר או הנחיה שונה</p>
            </div> 
            )
}

export default NoResults