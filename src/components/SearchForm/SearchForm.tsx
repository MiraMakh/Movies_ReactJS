import React, { useState } from "react";
import styles from "./SearchForm.module.scss";
import { SearchFormProps } from "../../models";

const SearchForm = ({ initialSearchQuery, onSearch }: SearchFormProps) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onSearch) {
      event.preventDefault();
      onSearch(searchQuery);
    }
  };

  return (
    <form>
      <div className={styles["search"]}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="What do you want to watch?"
          className={styles["search__input"]}
        />
        <button
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
