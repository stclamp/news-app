import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import ArticleCard from '../article-card/ArticleCard';
import styles from './ArticlesList.module.scss';
import Button from '../button/Button';
import Input from '../input/Input';
import Spinner from '../spinner/Spinner';
import EmptyState from '../empty-state/EmptyState';
import { getArticles } from '@/store/reducers/ArticlesSlice';

const ArticlesList = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  const dispatch = useAppDispatch();

  const { articles, isLoading, error } = useAppSelector(
    (state) => state.articlesReducer,
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const articlesList = useMemo(
    () => (
      <div className={styles['articles-list-wrapper']}>
        {articles.map((article, i) => (
          <ArticleCard
            key={article.title + i}
            image={article.urlToImage}
            title={article.title}
            description={article.description}
            link={article.url}
          />
        ))}
      </div>
    ),
    [articles],
  );

  const getMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(getArticles({ page: nextPage, query }));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    dispatch(getArticles({ page, query }));
  };

  const onSearchByKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(getArticles({ page, query }));
    }
  };

  return (
    <>
      <div className={styles.search}>
        <Input
          onChange={handleInput}
          onKeyDown={onSearchByKey}
          placeholder="Search here"
          type="text"
          value={query}
        />
        <Button onClick={onSearch} className={styles['search-button']}>
          Search!
        </Button>
      </div>
      {articles.length === 0 ? <EmptyState /> : articlesList}
      {isLoading ? (
        <Spinner />
      ) : (
        articles.length > 0 && (
          <Button type="button" onClick={getMore}>
            Load more
          </Button>
        )
      )}
    </>
  );
};
export default ArticlesList;
