import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.scss';
import { MovieDetailsProps } from '../../models';
import axios from 'axios';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BACKEND_URL}/${id}`);
        setMovie(response.data);
      } catch (err) {
        console.error('Error fetching movie details:', err);
        setError('Failed to load movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found!</p>;

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieDetails__poster}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={styles.movieDetails__image}
        />
      </div>
      <div className={styles.movieDetails__info}>
        <h1 className={styles.movieDetails__title}>{movie.title}</h1>
        <div className={styles.movieDetails__meta}>
          <span>{movie.release_date}</span>
          <span>{movie.runtime} min</span>
          <span>{movie.vote_average}/10</span>
        </div>
        <p className={styles.movieDetails__description}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
