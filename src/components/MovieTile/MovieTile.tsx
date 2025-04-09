import React, { useState } from 'react';
import styles from './MovieTile.module.scss';
import { MovieTileProps } from '../../models';

const MovieTile = ({
  id,
  imageUrl,
  title,
  releaseYear,
  genres,
  onClick,
  onEdit,
  onDelete,
  isActive = false,
}: MovieTileProps) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const toggleContextMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsContextMenuOpen(!isContextMenuOpen);
  };

  const handleEditClick = () => {
    if (onEdit) onEdit(id);
    setIsContextMenuOpen(false);
  };

  const handleDeleteClick = () => {
    if (onDelete) onDelete(id);
    setIsContextMenuOpen(false);
  };

  return (
    <div className={styles.movieTile} onClick={() => onClick(id)}>
      <img src={imageUrl} alt={title} className={styles.movieTile__image} />
      <div className={styles.movieTile__info}>
        <h3 className={styles.movieTile__title}>{title}</h3>
        <p className={styles.movieTile__yearGenres}>
          {releaseYear} ・ {genres.join(', ')}
        </p>
      </div>
      <button
        type="button"
        className={styles.movieTile__menuButton}
        onClick={toggleContextMenu}
      >
        ...
      </button>
      {isContextMenuOpen && (
        <div className={styles.movieTile__contextMenu}>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MovieTile;
