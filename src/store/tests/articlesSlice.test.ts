import { ArticlesState } from '@/types';
import reducer, { getArticles } from '@/store/reducers/ArticlesSlice';

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: '',
};

describe('articles reducer', () => {
  it('sets loading state on pending', () => {
    const state = reducer(initialState, { type: getArticles.pending });
    expect(state.isLoading).toBe(true);
  });

  it('adds articles on fulfill', () => {
    const articles = [{ title: 'Test' }];
    const state = reducer(initialState, {
      type: getArticles.fulfilled,
      payload: articles,
    });
    expect(state.articles).toEqual(articles);
  });
});
