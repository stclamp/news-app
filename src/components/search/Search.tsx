import { FC } from 'react';
import { EStatic } from '@/types';
import Input from '@/components/input/Input';

import styles from './Search.module.scss';
import { actions, getArticles } from '@/store/reducers/ArticlesSlice';
import Button from '@/components/button/Button';
import { useAppDispatch } from '@/hooks/redux';

interface SearchProps {
  query: string;
  page: number;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ query, setQuery, page }) => {
  const dispatch = useAppDispatch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    dispatch(actions.clearArticles());
    dispatch(getArticles({ page, query }));
  };

  const onSearchByKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(getArticles({ page, query }));
    }
  };
  return (
    <div className={styles.search}>
      <Input
        onChange={handleInput}
        onKeyDown={onSearchByKey}
        placeholder={EStatic.SEARCH_HERE}
        type="text"
        value={query}
      />

      <Button onClick={onSearch} className={styles['search-button']}>
        {EStatic.SEARCH}
      </Button>
    </div>
  );
};

export default Search;
