import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { CounterProps } from '../../models';

describe('Counter Component', () => {
  let initialProps: CounterProps;

  beforeEach(() => {
    initialProps = {
      initialValue: 10,
    };
  });

  it('should render initial value', () => {
    render(<Counter {...initialProps} />);

    const valueElement = screen.getByText(initialProps.initialValue.toString());

    expect(valueElement).toBeInTheDocument();
  });

  it('should decrement value on button click', () => {
    render(<Counter {...initialProps} />);
    const decrementButton = screen.getByText('-');

    fireEvent.click(decrementButton);

    expect(
      screen.getByText((initialProps.initialValue - 1).toString())
    ).toBeInTheDocument();
  });

  it('should increment value on button click', () => {
    render(<Counter {...initialProps} />);
    const incrementButton = screen.getByText('+');

    fireEvent.click(incrementButton);

    expect(
      screen.getByText((initialProps.initialValue + 1).toString())
    ).toBeInTheDocument();
  });
});
