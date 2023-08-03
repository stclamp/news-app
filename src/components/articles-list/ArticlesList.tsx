import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getArticles } from '@/store/reducers/ArticlesSlice';
import { EStatic } from '@/types';
import ArticleCard from '@/components/article-card/ArticleCard';
import Button from '@/components/button/Button';
import Spinner from '@/components/spinner/Spinner';
import EmptyState from '@/components/empty-state/EmptyState';
import styles from './ArticlesList.module.scss';
import Search from '../search/Search';

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
      <div
        data-testid="articles-card"
        className={styles['articles-list-wrapper']}
      >
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

  return (
    <>
      <Search page={page} query={query} setQuery={setQuery} />
      {!articles.length ? <EmptyState /> : articlesList}

      {isLoading ? (
        <Spinner />
      ) : (
        articles.length > 0 && (
          <Button type="button" onClick={getMore}>
            {EStatic.LOAD_MORE}
          </Button>
        )
      )}
    </>
  );
};
export default ArticlesList;
