import styles from './MovieDetails.module.scss';
import { MovieDetailsProps } from '../../models';

/* @TODO: make proper styles */
const MovieDetails = ({
  poster_path,
  title,
  release_date,
  vote_average,
  runtime,
  overview,
}: MovieDetailsProps) => {
  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetails__poster}>
        <img
          src={poster_path}
          alt={title}
          className={styles.movieDetails__image}
        />
      </div>
      <div className={styles.movieDetails__info}>
        <h1 className={styles.movieDetails__title}>{title}</h1>
        <div className={styles.movieDetails__meta}>
          <span>{release_date}</span> ・ <span>{runtime}</span> ・{' '}
          <span>{vote_average}/10</span>
        </div>
        <p className={styles.movieDetails__description}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
