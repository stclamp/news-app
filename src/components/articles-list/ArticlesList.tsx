import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getArticles, getMoreArticles } from '@/store/reducers/ActionCreators';
import ArticleCard from '../article-card/ArticleCard';
import styles from './ArticlesList.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';
import Spinner from '../spinner/Spinner';
import EmptyState from '../empty-state/EmptyState';

const ArticlesList = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const dispatch = useAppDispatch();
  const { articles, isLoading, error } = useAppSelector(
    (state) => state.articlesReducer,
  );

  const getMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(getMoreArticles(nextPage, query));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(getArticles(1, e.target.value));
  };
  return (
    <>
      <Input onChange={handleSearch} placeholder="Search here" />
      {articles.length === 0 ? (
        <EmptyState />
      ) : (
        <div className={styles['articles-list-wrapper']}>
          {articles.map((article) => (
            <ArticleCard
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              link={article.url}
            />
          ))}
        </div>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        articles.length > 0 && <Button onClick={getMore}>Load more</Button>
      )}
    </>
  );
};
export default ArticlesList;
