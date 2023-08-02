import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IArticle, IArticlesResponse } from '../../types/index';

interface ArticlesState {
  articles: IArticle[];
  isLoading: boolean;
  error: string;
}

interface ArticlesParams {
  query: string;
  page: number;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: '',
};

const apiKey = import.meta.env.VITE_API_KEY;

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async ({ query, page }: ArticlesParams, thunkAPI) => {
    try {
      const { data } = await axios.get<IArticlesResponse>(
        `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=10&searchIn=title,description&apiKey=${apiKey}`,
      );

      return data.articles;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      getArticles.fulfilled,
      (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        state.error = '';
        if (state.articles.length === 0) {
          state.articles = action.payload;
        } else {
          state.articles.push(...action.payload);
        }
      },
    );
    builder.addCase(getArticles.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Something went wrong';
      }
    });
  },
});

export default articlesSlice.reducer;
