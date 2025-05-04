import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { MovieDetailsProps } from '../../models';

/* @TODO: solve  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; issue in unit test*/
describe('MovieDetails Component', () => {
  const defaultProps: MovieDetailsProps = {
    id: 123,
    poster_path: `./src/assets/Bitmap.png`,
    title: 'Movie title',
    vote_average: 8.8,
    genres: 'test',
    runtime: 128,
    release_date: 2010,
    overview:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  };

  it('should render the movie details', () => {
    render(<MovieDetails />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();

    const release_date = screen.getByText(`${defaultProps.release_date}`);
    expect(release_date).toBeInTheDocument();

    const runtime = screen.getByText(defaultProps.runtime);
    expect(runtime).toBeInTheDocument();

    const vote_average = screen.getByText(`${defaultProps.vote_average}/10`);
    expect(vote_average).toBeInTheDocument();

    const overview = screen.getByText(defaultProps.overview);
    expect(overview).toBeInTheDocument();
  });
});
