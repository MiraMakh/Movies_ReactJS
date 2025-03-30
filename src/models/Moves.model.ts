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
  releaseYear: number;
  rating: number;
  duration: string;
  description: string;
}
