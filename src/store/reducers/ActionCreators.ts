import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AppDispatch } from '../store';
import { IArticle } from '@/src/types';
import { articlesSlice } from './ArticlesSlice';

interface IArticlesResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export const getArticles =
  (page: number, q: string) => async (dispatch: AppDispatch) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      dispatch(articlesSlice.actions.getArticlesRequest());
      const { data } = await axios.get<IArticlesResponse>(
        `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=10&apiKey=${apiKey}`,
      );

      dispatch(articlesSlice.actions.getArticlesSuccess(data.articles));
    } catch (err) {
      dispatch(articlesSlice.actions.getArticlesError(err.message));
      toast.error(err.message);
    }
  };

export const getMoreArticles =
  (page: number, q: string) => async (dispatch: AppDispatch) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      dispatch(articlesSlice.actions.getArticlesRequest());
      const { data } = await axios.get<IArticlesResponse>(
        `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=10&apiKey=${apiKey}`,
      );

      dispatch(articlesSlice.actions.getMoreArticles(data.articles));
    } catch (err) {
      dispatch(articlesSlice.actions.getArticlesError(err.message));
      toast.error(err.message);
    }
  };
