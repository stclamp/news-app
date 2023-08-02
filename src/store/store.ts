import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './reducers/ArticlesSlice';

export const store = configureStore({
  reducer: { articlesReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
