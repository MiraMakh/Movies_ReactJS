import { useState } from 'react';
import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { AddMovieProps, MovieDetailsProps } from '../../models';
import { useNavigate } from 'react-router-dom';

/* @TODO: update unit tests */
const AddMovie = ({ onSubmit }: AddMovieProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsDialogOpen(false);
    navigate('/');
  };

  const handleFormSubmit = (movie: MovieDetailsProps) => {
    onSubmit(movie);
    handleClose();
  };

  return (
    <>
      <button type="button" onClick={() => setIsDialogOpen(true)}>
        Add Movie
      </button>
      {isDialogOpen && (
        <Dialog title={'Add Movie'} onClose={handleClose}>
          <MovieForm onSubmit={handleFormSubmit} />
        </Dialog>
      )}
    </>
  );
};

export default AddMovie;
