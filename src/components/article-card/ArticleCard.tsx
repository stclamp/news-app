import { FC, useMemo } from 'react';
import { EStatic } from '@/types';
import defaultImage from '@/assets/images/default.png';
import styles from './ArticleCard.module.scss';

interface ArticleCardProps {
  title: string;
  description: string;
  link?: string;
  image?: string | null;
}

const ArticleCard: FC<ArticleCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  const descriptionWithLink = useMemo(() => {
    if (description.length > 150) {
      return (
        <p className={styles.description}>
          {description.substring(0, 150)}...
          <a target="_blank" href={link} rel="noreferrer">
            {EStatic.READ_MORE}
          </a>
        </p>
      );
    }

    return (
      <p className={styles.description}>
        {description}
        <a target="_blank" href={link} rel="noreferrer">
          {EStatic.READ_MORE}
        </a>
      </p>
    );
  }, [description]);
  return (
    <div className={styles['article-card-wrapper']}>
      <div className={styles.image}>
        <img src={image || defaultImage} alt={title} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        {descriptionWithLink}
      </div>
    </div>
  );
};
export default ArticleCard;
