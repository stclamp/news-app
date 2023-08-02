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
  reducers: {},
});

export default articlesSlice.reducer;
