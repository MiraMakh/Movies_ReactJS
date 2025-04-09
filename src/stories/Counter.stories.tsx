import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Counter } from '../components';
import { CounterProps } from '../models';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    initialValue: {
      control: { type: 'number' },
      description: 'Initial value for the counter',
    },
  },
};

export default meta;

type Story = StoryObj<CounterProps>;

// Default Story starts at 5
export const Default: Story = {
  args: {
    initialValue: 5,
  },
};

// Story with starting value
export const WithCustomInitialValue: Story = {
  args: {
    initialValue: 10,
  },
};

// Interactive Story dynamic interactions
export const Interactive: StoryFn<CounterProps> = (args) => {
  return <Counter {...args} />;
};

Interactive.args = {
  initialValue: 0,
};
