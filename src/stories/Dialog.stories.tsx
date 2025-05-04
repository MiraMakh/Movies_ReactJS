import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from '../components';
import { DialogProps } from '../models';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      overview: 'The title displayed in the dialog header',
    },
    children: {
      control: 'text',
      overview: 'Content inside the dialog body',
    },
    onClose: {
      action: 'onClose',
      overview: 'Callback for closing the dialog',
    },
  },
};

export default meta;

export const Default: StoryObj<DialogProps> = {
  args: {
    title: 'Default Dialog Title',
    children: <p>Default Dialog content.</p>,
    onClose: () => console.log('Dialog closed'),
  },
};

export const Interactive: StoryFn<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen)
    return (
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
    );

  return (
    <Dialog
      {...args}
      onClose={() => {
        setIsOpen(false);
        args.onClose();
      }}
    />
  );
};

Interactive.args = {
  title: 'Interactive Dialog',
  children: <p>Interactive Dialog. "Close" button will close it.</p>,
};
