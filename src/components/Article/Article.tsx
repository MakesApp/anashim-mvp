import React from 'react';
import styles from './Article.module.css';
import { IArticle } from '@/localTypes/article.types';

const Article: React.FC<IArticle> = ({ title, brief, image, link, logo }) => {
  return (
    <a className={styles.container} href={link} target="_blank">
      <article className={styles.article}>
        <img className={styles.img} loading="lazy" src={image} alt={title} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.brief}>{brief}</p>
          <div className={styles.info}>
            <img loading="lazy" src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.showMore}>להציג מידע</div>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Article;
