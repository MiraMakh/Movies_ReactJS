import React, { useEffect, useState } from 'react';
import {
  SearchForm,
  Genres,
  MovieTile,
  SortControl,
  AddMovie,
} from './components';
import './App.scss';
import { genres } from './constants';
import { MovieDetailsProps } from './models';
import axios from 'axios';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

const App: React.FC = () => {
  // @TODO Add more proper layout styles
  // @TODO Add moves pagination
  // @TODO check unit test after property updates
  // @TODO check why keypress in search input does not make new call
  // @TODO convert runtime to hh:mm format

  const [movies, setMovies] = useState<MovieDetailsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get('query') || '';
  const sortBy = searchParams.get('sortBy') || 'title';
  const sortOrder = searchParams.get('sortOrder') || 'desc';
  const selectedGenre = searchParams.get('genre') || 'All';

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        sortBy,
        sortOrder,
        search: searchQuery,
        searchBy: 'title',
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
    setSearchParams({ query, sortBy, sortOrder, genre: selectedGenre });
  };

  const handleSortChange = (newSortBy: string) => {
    setSearchParams({
      query: searchQuery,
      sortBy: newSortBy,
      sortOrder,
      genre: selectedGenre,
    });
  };

  const handleGenreSelect = (genre: string) => {
    setSearchParams({ query: searchQuery, sortBy, sortOrder, genre });
  };

  const handleMovieClick = (id: number) => {
    navigate(`/${id}?${searchParams.toString()}`);
  };

  const renderContent = () => {
    if (loading) return <p>Loading movies...</p>;
    if (error) return <p>Error: {error}</p>;
    if (movies.length === 0) return <p>No movies found.</p>;

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
            onClick={(id) => handleMovieClick(id)}
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

      <SearchForm onSearch={handleSearch} initialSearchQuery={searchQuery} />

      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      <SortControl currentSelection={sortBy} onChange={handleSortChange} />

      <Outlet />
      {renderContent()}
    </>
  );
};

export default App;
