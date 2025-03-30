import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
  const SearchFormMock = (initialSearchQuery: string, onSearch: jest.Mock) => {
    render(
      <SearchForm initialSearchQuery={initialSearchQuery} onSearch={onSearch} />
    );
  };

  it('should render an input with initial value', () => {
    const initialSearchQueryMock = 'Initial search value';
    const onSearchMock = jest.fn();

    SearchFormMock(initialSearchQueryMock, onSearchMock);

    expect(
      screen.getByDisplayValue(initialSearchQueryMock)
    ).toBeInTheDocument();
  });

  it('should call onSearch with the proper value on typing and clicking search', async () => {
    const initialSearchQueryMock = 'Initial search value';
    const newSearchQueryMock = 'New search value';
    const onSearchMock = jest.fn();

    SearchFormMock(initialSearchQueryMock, onSearchMock);

    const inputElement = screen.getByDisplayValue(initialSearchQueryMock);
    const searchButton = screen.getByText('Search');

    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, newSearchQueryMock);

    await userEvent.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(newSearchQueryMock);
  });

  it('should call onSearch with the proper value when pressing Enter', async () => {
    const initialSearchQueryMock = 'Initial search value';
    const newSearchQueryMock = 'New search value';
    const onSearchMock = jest.fn();
    SearchFormMock(initialSearchQueryMock, onSearchMock);
    const inputElement = screen.getByDisplayValue(initialSearchQueryMock);

    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, newSearchQueryMock);

    await userEvent.keyboard('[Enter]');

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith(newSearchQueryMock);
  });
});
