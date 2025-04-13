import React from 'react';
import styles from './SortControl.module.scss';
import { SortControlProps } from '../../models';

const SortControl = ({ currentSelection, onChange }: SortControlProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort-select" className={styles.sortControl__label}>
        Sort by
      </label>
      <select
        id="sort-select"
        value={currentSelection}
        onChange={handleSelectChange}
        className={styles.sortControl__select}
      >
        <option value="Release Date">Release Date</option>
        <option value="Title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
