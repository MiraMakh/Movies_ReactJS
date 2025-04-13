import React, { useState } from 'react';
import {
  Counter,
  SearchForm,
  Genres,
  MovieTile,
  MovieDetails,
  SortControl,
} from './components';
import './App.scss';
import { genres, movies } from './constants';
import { MovieDetailsProps } from './models';

const App: React.FC = () => {
  // @TODO Add layout components and move SearchForm and Genres in their components

  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps | null>(
    null
  );
  const [sortBy, setSortBy] = useState('Release Date');

  const handleSearch = (searchQuery: string) => {
    // @TODO search logic here
  };

  const handleMovieClick = (id: number) => {
    const movie =
      movies.find((movie) => {
        if (movie.id === id) {
          return {
            imageUrl: movie.imageUrl,
            title: movie.title,
            releaseYear: movie.releaseYear,
            rating: movie.rating,
            duration: movie.duration,
            description: movie.description,
          };
        }
      }) || null;

    setSelectedMovie(movie);
  };

  const handleEditMovie = (id: number) => {
    // @TODO movie edit logic here
  };

  const handleDeleteMovie = (id: number) => {
    // @TODO movie delete logic here
  };

  const handleSortChange = (newValue: string) => {
    setSortBy(newValue);
  };

  const [selectedGenre, setSelectedGenre] = useState<string>(genres[0]);
  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      {React.createElement(Counter, { initialValue: 10 })}

      <SearchForm
        initialSearchQuery="Initial search value"
        onSearch={handleSearch}
      />

      {selectedMovie && (
        <div style={{ flex: '1', padding: '20px', background: '#f8f8f8' }}>
          <MovieDetails
            imageUrl={selectedMovie.imageUrl}
            title={selectedMovie.title}
            releaseYear={selectedMovie.releaseYear}
            rating={selectedMovie.rating}
            duration={selectedMovie.duration}
            description={selectedMovie.description}
          />
        </div>
      )}

      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      <SortControl currentSelection={sortBy} onChange={handleSortChange} />

      <div className="grid-container">
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            id={movie.id}
            imageUrl={movie.imageUrl}
            title={movie.title}
            releaseYear={movie.releaseYear}
            genres={movie.genres}
            onClick={handleMovieClick}
            onEdit={handleEditMovie}
            onDelete={handleDeleteMovie}
          />
        ))}
      </div>
    </>
  );
};

export default App;
