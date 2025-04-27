import React from 'react';
import { EditMovieProps } from '../../models';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

/* @TODO: update unit tests */
const EditMovie = ({ initialMovie, onSubmit, isDialogOpen, onClose }: EditMovieProps & { isDialogOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {isDialogOpen && (
        <Dialog title={'Edit Movie'} onClose={onClose}>
          <MovieForm
            initialMovie={initialMovie}
            onSubmit={(movie) => {
              onSubmit(movie);
              onClose();
            }}
          />
        </Dialog>
      )}
    </>
  );
};

export default EditMovie;