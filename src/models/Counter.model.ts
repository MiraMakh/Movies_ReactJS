export interface GenresProps {
  genres: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
}
