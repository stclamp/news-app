export interface IArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export interface IArticlesResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export interface ArticlesState {
  articles: IArticle[];
  isLoading: boolean;
  error: string;
}

export enum EStatic {
  READ_MORE = 'Read more',
  SEARCH_HERE = 'Search here',
  SEARCH = 'Search!',
  LOAD_MORE = 'Load more',
  NO_RESULTS = 'No results found',
}
