import React, { useState } from "react";
import styles from "./SearchForm.module.scss";

const SearchForm: React.FC<{
  InitialSearchQuery: string;
  onSearch: (searchQuery: string) => void;
}> = ({ InitialSearchQuery, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(InitialSearchQuery);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log("handleInputChange", event.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchQuery);
      console.log("handleSearchClick", searchQuery);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchClick();
    }
  };

  return (
    <form>
      <div className={styles["search"]}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="What do you want to watch?"
          className={styles["search__input"]}
        />
        <button
          type="button"
          onClick={handleSearchClick}
          className={styles["search__button"]}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
