import React from 'react';
import counter from './Counter.module.scss';
import { CounterProps, CounterState } from '../../models';

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }

  increment = () => {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  };

  decrement = () => {
    this.setState((state) => ({
      value: state.value - 1,
    }));
  };

  render() {
    return React.createElement(
      'div',
      { className: counter.container },
      React.createElement(
        'button',
        {
          onClick: this.decrement,
          className: counter.button,
        },
        '-'
      ),
      React.createElement(
        'span',
        { className: counter.value },
        this.state.value
      ),
      React.createElement(
        'button',
        { onClick: this.increment, className: counter.button },
        '+'
      )
    );
  }
}

export default Counter;
