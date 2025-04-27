import React, { useEffect, useState } from 'react';
import {
  SearchForm,
  Genres,
  MovieTile,
  SortControl,
  AddMovie,
  EditMovie,
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

  const BACKEND_URL = 'http://localhost:4000/movies';

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState<MovieDetailsProps | null>(
    null
  );

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
    console.log(movie);
    try {
      const response = await axios.post(`${BACKEND_URL}`, movie);

      setMovies((prevMovies) => [...prevMovies, response.data]);
      navigate(`/`, { replace: true });
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Failed to add movie. Please try again.');
    }
  };

  const handleEditMovie = async (id: number) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/${id}`);

      setEditingMovie(response.data);
      setIsEditDialogOpen(true);
    } catch (error) {
      console.error('Error fetching movie for editing:', error);
      alert('Failed to fetch movie details.');
    }
  };

  const handleEditSubmit = async (updatedMovie: MovieDetailsProps) => {
    try {
      const response = await axios.put(`${BACKEND_URL}`, updatedMovie);

      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === updatedMovie.id ? response.data : movie
        )
      );
      setIsEditDialogOpen(false);
      setEditingMovie(null);
    } catch (error) {
      console.error('Error updating movie:', error);
      alert('Failed to update movie. Please try again.');
    }
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
            onEdit={(id) => handleEditMovie(id)}
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

      <EditMovie
        initialMovie={editingMovie}
        onSubmit={(movie) =>
          handleEditSubmit({ ...movie, id: editingMovie.id })
        }
        isDialogOpen={isEditDialogOpen}
        onClose={() => {
          navigate('/');
          setIsEditDialogOpen(false);
        }}
      />
    </>
  );
};

export default App;
