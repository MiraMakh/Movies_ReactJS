import { render, screen, fireEvent } from '@testing-library/react';
import { SortControlProps } from '../../models';
import SortControl from './SortControl';

describe('SortControl Component', () => {
  const defaultProps: SortControlProps = {
    currentSelection: 'title',
    onChange: jest.fn(),
  };

  it('should render label and select dropdown', () => {
    render(<SortControl {...defaultProps} />);

    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();

    expect(screen.getByRole('combobox')).toBeInTheDocument();

    expect(screen.getByRole('option', { name: 'Title' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Genres' })).toBeInTheDocument();
  });

  it('should pass the selected value to onChange', () => {
    const onChangeMock = jest.fn();
    render(<SortControl currentSelection="title" onChange={onChangeMock} />);

    const dropdown = screen.getByRole('combobox');

    fireEvent.change(dropdown, { target: { value: 'genres' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('genres');
  });

  it('should render selected based on currentSelection', () => {
    render(<SortControl {...defaultProps} />);

    const dropdown = screen.getByRole('combobox') as HTMLSelectElement;
    expect(dropdown.value).toBe('title');
  });
});
