import { render, screen } from '@testing-library/react';
import { SortControlProps } from '../../models';
import SortControl from './SortControl';

describe('SortControl Component', () => {
  const defaultProps: SortControlProps = {
    currentSelection: 'Release Date',
    onChange: jest.fn(),
  };

  /* @TODO: I would also check that the dropdown behaves correctly, i.d. calls onChange with a chosen value. */

  it('should render label and select dropdown', () => {
    render(<SortControl {...defaultProps} />);

    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Release Date' })
    ).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Title' })).toBeInTheDocument();
  });
});
