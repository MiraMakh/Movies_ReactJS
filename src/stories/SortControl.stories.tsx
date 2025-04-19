import { Meta, StoryObj } from '@storybook/react';
import { SortControl } from '../components';
import { SortControlProps } from '../models';

const meta: Meta<typeof SortControl> = {
  title: 'Components/SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currentSelection: {
      control: { type: 'radio' },
      options: ['Release Date', 'Title'],
      overview: 'Tracks the currently selected sorting option',
    },
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<SortControlProps>;

// Default Story
export const Default: Story = {
  args: {
    currentSelection: 'Release Date',
    onChange: (newValue) => console.log(`Sort by: ${newValue}`),
  },
};
