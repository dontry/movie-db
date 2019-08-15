export interface Show {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  name: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_name: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  first_air_date: string;
  watchlist?: boolean;
}
