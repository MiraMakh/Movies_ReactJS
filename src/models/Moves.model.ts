export interface MovieTileProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: number;
  genres: string[] | string;
  onClick: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  isActive?: boolean;
}

export interface MovieDetailsProps {
  id: number;
  poster_path: string;
  title: string;
  genres: string;
  release_date: number;
  vote_average: number;
  runtime: number;
  overview: string;
}

export interface MovieFormProps {
  initialMovie?: Partial<MovieDetailsProps>;
  onSubmit: (movie: MovieDetailsProps) => void;
}

export interface AddMovieProps {
  onSubmit: (movie: MovieDetailsProps) => void;
}
export interface EditMovieProps {
  initialMovie: MovieDetailsProps;
  onSubmit: (movie: MovieDetailsProps) => void;
}
