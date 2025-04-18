import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Genres from './Genres';

describe('Genres Component', () => {
  const genresMock = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const selectedGenreMock = 'All';
  const onSelectMock = jest.fn();

  const GenresMock = (
    genres: string[],
    selectedGenre: string,
    onSelect: jest.Mock
  ) => {
    render(
      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={onSelect}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render all genres', () => {
    GenresMock(genresMock, selectedGenreMock, onSelectMock);

    genresMock.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });

    expect(screen.getAllByRole('button')).toHaveLength(genresMock.length);
  });

  it('Should highlight selected genre', async () => {
    GenresMock(genresMock, selectedGenreMock, onSelectMock);

    const selectedButton = screen.getByText(selectedGenreMock);

    expect(selectedButton).toHaveClass('genres__button--selected');
  });

  it('Should call onSelect with correct genre on click', async () => {
    GenresMock(genresMock, selectedGenreMock, onSelectMock);
    const actionButton = screen.getByText(selectedGenreMock);

    await userEvent.click(actionButton);

    expect(onSelectMock).toHaveBeenCalledTimes(1);
    expect(onSelectMock).toHaveBeenCalledWith(selectedGenreMock);
  });
});
