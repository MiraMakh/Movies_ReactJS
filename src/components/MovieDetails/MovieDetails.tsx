import styles from './MovieDetails.module.scss';
import { MovieDetailsProps } from '../../models';

/* @TODO: make proper styles */
const MovieDetails = ({
  imageUrl,
  title,
  releaseYear,
  rating,
  duration,
  description,
}: MovieDetailsProps) => {
  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetails__poster}>
        <img
          src={imageUrl}
          alt={title}
          className={styles.movieDetails__image}
        />
      </div>
      <div className={styles.movieDetails__info}>
        <h1 className={styles.movieDetails__title}>{title}</h1>
        <div className={styles.movieDetails__meta}>
          <span>{releaseYear}</span> ・ <span>{duration}</span> ・{' '}
          <span>{rating}/10</span>
        </div>
        <p className={styles.movieDetails__description}>{description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
