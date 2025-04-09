import { useState } from 'react';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { AddMovieProps } from '../../models';

const AddMovie = ({ onSubmit }: AddMovieProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsDialogOpen(true)}>Add Movie</button>
      {isDialogOpen && (
        <Dialog title={'Add Movie'} onClose={handleClose}>
          <MovieForm
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

export default AddMovie;
