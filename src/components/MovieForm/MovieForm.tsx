import React, { useState, ChangeEvent, FormEvent } from 'react';
import './MovieForm.scss';
import { MovieDetailsProps, MovieFormProps } from '../../models';

/* @TODO: Add unit tests */
const MovieForm = ({ initialMovie, onSubmit }: MovieFormProps) => {
  const [formValues, setFormValues] = useState<MovieDetailsProps>({
    title: initialMovie?.title || '',
    releaseYear: initialMovie?.releaseYear || 0,
    imageUrl: initialMovie?.imageUrl || '',
    rating: initialMovie?.rating || 0,
    genre: initialMovie?.genre || '',
    duration: initialMovie?.duration || '',
    description: initialMovie?.description || '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formValues.title || !formValues.imageUrl) {
      alert('Please fill out all required fields (TITLE, IMAGE URL).');
      return;
    }

    onSubmit(formValues);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
            placeholder="Enter movie title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={formValues.releaseYear}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="movieUrl">Movie URL</label>
          <input
            type="url"
            id="movieUrl"
            name="movieUrl"
            value={formValues.imageUrl}
            onChange={handleInputChange}
            placeholder="Enter movie poster URL"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formValues.rating}
            onChange={handleInputChange}
            placeholder="Enter movie rating"
            min="0"
            max="10"
          />
        </div>
      </div>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formValues.genre}
            onChange={handleInputChange}
            placeholder="Enter genre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="runtime">Runtime</label>
          <input
            type="number"
            id="runtime"
            name="runtime"
            value={formValues.duration}
            onChange={handleInputChange}
            placeholder="Enter runtime in minutes"
            min="0"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="overview">Overview</label>
        <textarea
          id="overview"
          name="overview"
          value={formValues.description}
          onChange={handleInputChange}
          placeholder="Enter movie overview"
          rows={4}
        />
      </div>

      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MovieForm;
