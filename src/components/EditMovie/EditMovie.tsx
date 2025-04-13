import React, { useState } from 'react';
import { EditMovieProps } from '../../models';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

const EditMovie = ({ initialMovie, onSubmit }: EditMovieProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsDialogOpen(true)}>Edit Movie</button>

      {isDialogOpen && (
        <Dialog title={'Edit Movie'} onClose={handleClose}>
          <MovieForm
            initialMovie={initialMovie}
            onSubmit={(movie) => {
              onSubmit(movie);
              handleClose();
            }}
          />
        </Dialog>
      )}
    </>
  );
};

export default EditMovie;
