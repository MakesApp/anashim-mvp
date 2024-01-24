import React from 'react';
import styles from './Article.module.css';
import { IArticle } from '@/localTypes/article.types';

const Article: React.FC<IArticle> = ({ title, brief, image, link }) => {
  return (
    <a className={styles.container} href={link} target="_blank">
      <article className={styles.article}>
        <div className={styles.image}>
          <img loading="lazy" src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.brief}>{brief}</p>
          <div className={styles.info}>
            {/* <img loading="lazy" src={logo} alt="Logo" className={styles.logo} /> */}
            <div className={styles.showMore}>להציג עוד</div>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Article;
