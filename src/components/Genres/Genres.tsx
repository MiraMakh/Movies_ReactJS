import styles from "./Genres.module.scss";
import { GenresProps } from "../../models";
import clsx from "clsx";

const Genres = ({ genres, selectedGenre, onSelect }: GenresProps) => {
  return (
    <div className={styles["genres"]}>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={clsx(styles["genres__button"], {
            [styles["genres__button--selected"]]: selectedGenre === genre,
          })}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Genres;
