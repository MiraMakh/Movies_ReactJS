export interface SearchFormProps {
  initialSearchQuery: string;
  onSearch: (searchQuery: string) => void;
}

export interface MovieFormInputs {
  id?: number;
  poster_path: string;
  title: string;
  genres: string | string[];
  release_date: string;
  vote_average: number;
  runtime: number;
  overview: string;
  budget?: number;
  tagline?: string;
  vote_count?: number;
  revenue?: number;
}
