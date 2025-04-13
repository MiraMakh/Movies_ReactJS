import React, { useEffect, useState } from 'react';
import {
  Counter,
  SearchForm,
  Genres,
  MovieTile,
  MovieDetails,
  SortControl,
  AddMovie,
} from './components';
import './App.scss';
import { genres, movies } from './constants';
import { MovieDetailsProps } from './models';
import axios from 'axios';

const App: React.FC = () => {
  // @TODO Add more proper layout styles
  // @TODO Add moves pagination
  // @TODO check unit test after property updates
  // @TODO check why keypress in search input does not make new call
  // @TODO convert runtime to hh:mm format

  const [movies, setMovies] = useState<MovieDetailsProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps | null>(
    null
  );
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedGenre, setSelectedGenre] = useState<string>(genres[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const BACKEND_URL = 'http://localhost:4000/movies';

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        sortBy,
        sortOrder,
        search: searchQuery,
        searchBy: sortBy,
        filter: selectedGenre !== 'All' ? selectedGenre : '',
        limit: selectedGenre === 'All' ? '300' : '10',
        offset: '0',
      });

      const response = await axios.get(`${BACKEND_URL}?${params.toString()}`);
      setMovies(response.data.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [sortBy, sortOrder, searchQuery, selectedGenre]);

  const handleMovieClick = (id: number) => {
    const movie =
      movies.find((movie) => {
        if (movie.id === id) {
          return {
            poster_path: movie.poster_path,
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            runtime: movie.runtime,
            overview: movie.overview,
          };
        }
      }) || null;

    setSelectedMovie(movie);
  };

  const handleAddMovie = async (movie: MovieDetailsProps) => {
    // @TODO movie addition logic
    console.log('Add movie:', movie);
  };

  const handleEditMovie = async (id: number) => {
    // @TODO movie edit logic
    console.log('Edit movie ID:', id);
  };

  const handleDeleteMovie = async (id: number) => {
    // @TODO movie delete logic
    console.log('Delete movie ID:', id);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (newValue: string) => {
    setSortBy(newValue);
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  const renderContent = () => {
    if (loading) {
      return <p>Loading movies...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (movies.length === 0) {
      return <p>No movies found.</p>;
    }

    return (
      <div className="grid-container">
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            genres={movie.genres}
            onClick={handleMovieClick}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <AddMovie onSubmit={handleAddMovie} />

      <SearchForm
        initialSearchQuery="Initial search value"
        onSearch={handleSearch}
      />

      {selectedMovie && (
        <div style={{ flex: '1', padding: '20px', background: '#f8f8f8' }}>
          <MovieDetails
            id={selectedMovie.id}
            poster_path={selectedMovie.poster_path}
            title={selectedMovie.title}
            genres={selectedMovie.genres}
            release_date={selectedMovie.release_date}
            vote_average={selectedMovie.vote_average}
            runtime={selectedMovie.runtime}
            overview={selectedMovie.overview}
          />
        </div>
      )}

      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      <SortControl currentSelection={sortBy} onChange={handleSortChange} />

      {renderContent()}
    </>
  );
};

export default App;
