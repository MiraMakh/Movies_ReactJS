import { JSX } from 'react/jsx-runtime';

export interface DialogProps {
  title: string | JSX.Element;
  children: React.ReactNode;
  onClose: () => void;
}
