import React, { useState } from 'react';
import { Counter, SearchForm, Genres } from './components';
import './App.scss';

const App: React.FC = () => {
  // @TODO Add layout components and move SearchForm and Genres in their components

  const handleSearch = (searchQuery: string) => {
    // @TODO search logic here
  };

  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
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

      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />
    </>
  );
};

export default App;
