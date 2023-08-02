import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IArticle } from '../../types/index';

interface ArticlesState {
  articles: IArticle[];
  isLoading: boolean;
  error: string;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: '',
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticlesRequest(state) {
      state.isLoading = true;
    },
    getArticlesSuccess(state, action: PayloadAction<IArticle[]>) {
      state.isLoading = false;
      state.error = '';
      state.articles = action.payload;
    },
    getMoreArticles(state, action: PayloadAction<IArticle[]>) {
      state.isLoading = false;
      state.error = '';
      state.articles.push(...action.payload);
    },
    getArticlesError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default articlesSlice.reducer;
