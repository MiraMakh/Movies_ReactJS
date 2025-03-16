import React from "react";
import styles from "./Genres.module.scss";

const Genres: React.FC<{
  genres: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
}> = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div className={styles["genres"]}>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`${styles["genres__button"]} ${
            selectedGenre === genre ? styles["genres__button--selected"] : null
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Genres;
