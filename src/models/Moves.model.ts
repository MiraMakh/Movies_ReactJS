export interface MovieTileProps {
  id: number;
  imageUrl: string;
  title: string;
  releaseYear: number;
  genres: string[];
  onClick: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  isActive?: boolean;
}

export interface MovieDetailsProps {
  imageUrl: string;
  title: string;
  genre?: string;
  releaseYear: number;
  rating: number;
  duration: string /* @TODO: change with number when BE will be added */;
  description: string;
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
