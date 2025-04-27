import React from 'react';
import './MovieForm.scss';
import { MovieFormProps, MovieFormInputs } from '../../models';
import { useForm, SubmitHandler } from 'react-hook-form';

const MovieForm = ({ initialMovie, onSubmit }: MovieFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFormInputs>({
    defaultValues: {
      title: initialMovie?.title || '',
      tagline: initialMovie?.tagline || '',
      vote_average: initialMovie?.vote_average || 0,
      vote_count: initialMovie?.vote_count || 0,
      release_date: initialMovie?.release_date || '',
      poster_path: initialMovie?.poster_path || '',
      overview: initialMovie?.overview || '',
      budget: initialMovie?.budget || 0,
      revenue: initialMovie?.revenue || 0,
      runtime: initialMovie?.runtime || 0,
      genres: Array.isArray(initialMovie?.genres)
        ? initialMovie.genres.join(', ')
        : initialMovie?.genres || '',
    },
  });

  const onSubmitHandler: SubmitHandler<MovieFormInputs> = (data) => {
    const genresArray = Array.isArray(data.genres)
      ? data.genres
      : data.genres
          .split(',')
          .map((genre) => genre.trim())
          .filter((genre) => genre !== '');

    const transformedData = {
      ...data,
      vote_average: Number(data.vote_average),
      vote_count: Number(data.vote_count),
      budget: Number(data.budget),
      revenue: Number(data.revenue),
      runtime: Number(data.runtime),
      genres: genresArray,
    };

    onSubmit(transformedData);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            placeholder="Enter movie title"
          />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="tagline">Tagline *</label>
          <input
            type="text"
            id="tagline"
            {...register('tagline', { required: 'Tagline is required' })}
            placeholder="Enter the tagline"
          />
          {errors.tagline && <p className="error">{errors.tagline.message}</p>}
        </div>
      </div>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="vote_average">Vote Average *</label>
          <input
            type="number"
            step="0.1"
            id="vote_average"
            {...register('vote_average', {
              required: 'Vote Average is required',
              min: { value: 0, message: 'Vote Average must be at least 0' },
              max: { value: 10, message: 'Vote Average cannot exceed 10' },
            })}
            placeholder="Enter the average vote"
          />
          {errors.vote_average && (
            <p className="error">{errors.vote_average.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="vote_count">Vote Count *</label>
          <input
            type="number"
            id="vote_count"
            {...register('vote_count', { required: 'Vote Count is required' })}
            placeholder="Enter the vote count"
          />
          {errors.vote_count && (
            <p className="error">{errors.vote_count.message}</p>
          )}
        </div>
      </div>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="release_date">Release Date *</label>
          <input
            type="date"
            id="release_date"
            {...register('release_date', {
              required: 'Release Date is required',
            })}
          />
          {errors.release_date && (
            <p className="error">{errors.release_date.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="poster_path">Poster Path *</label>
          <input
            type="url"
            id="poster_path"
            {...register('poster_path', {
              required: 'Poster Path is required',
            })}
            placeholder="Enter the poster URL"
          />
          {errors.poster_path && (
            <p className="error">{errors.poster_path.message}</p>
          )}
        </div>
      </div>

      <div className="form-line">
        <div className="form-group">
          <label htmlFor="budget">Budget *</label>
          <input
            type="number"
            id="budget"
            {...register('budget', { required: 'Budget is required' })}
            placeholder="Enter the budget amount"
            min="0"
          />
          {errors.budget && <p className="error">{errors.budget.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="revenue">Revenue *</label>
          <input
            type="number"
            id="revenue"
            {...register('revenue', { required: 'Revenue is required' })}
            placeholder="Enter the revenue amount"
            min="0"
          />
          {errors.revenue && <p className="error">{errors.revenue.message}</p>}
        </div>
      </div>
      <div className="form-line">
        <div className="form-group">
          <label htmlFor="runtime">Runtime (minutes) *</label>
          <input
            type="number"
            id="runtime"
            {...register('runtime', {
              required: 'Runtime is required',
              min: { value: 1, message: 'Runtime must be at least 1 minute' },
            })}
            placeholder="Enter movie runtime in minutes"
          />
          {errors.runtime && <p className="error">{errors.runtime.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="genres">Genres *</label>
          <input
            type="text"
            id="genres"
            {...register('genres', {
              required: 'Genres are required',
            })}
            placeholder="Enter genres (comma-separated)"
          />
          {errors.genres && <p className="error">{errors.genres.message}</p>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="overview">Overview *</label>
        <textarea
          id="overview"
          {...register('overview', { required: 'Overview is required' })}
          placeholder="Enter movie overview"
          rows={4}
        />
        {errors.overview && <p className="error">{errors.overview.message}</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MovieForm;
