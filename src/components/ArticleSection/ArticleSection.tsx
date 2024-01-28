import Article from '../Article/Article'
import styles from './ArticleSection.module.css'
import newsIcon from '@assets/icons/news.svg'
import joinHubIcon from '@assets/icons/join.svg'
import { IArticleSectionProps } from './ArticleSection.types'
import JoinHub from '../JoinHub/JoinHub'
const ArticleSection:React.FC<IArticleSectionProps> = ({article}) => {
  return (
<section className={styles.article_section}>
          <div className={styles.article_news}>
            <div className={styles.article_news_container}>
            <img src={newsIcon} alt="news icon" width={'34px'} height={'30px'}/>
          <h2 className={styles.article_news_title}>חדשות מהתעשייה</h2>
          </div>
            <Article {...article} />
          </div>
           <div className={styles.article_news}>
            <div className={styles.article_news_container}>
            <img src={joinHubIcon} alt="join hub icon" width={'34px'} height={'30px'}/>
          <h2 className={styles.article_news_title}>הצטרפו ל-HUB</h2>
          </div>
          <JoinHub/>
          </div>
        </section>  )
}

export default ArticleSection