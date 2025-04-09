import { DialogProps } from '../../models';
import { createPortal } from 'react-dom';
import './Dialog.scss';

const Dialog = ({ title, children, onClose }: DialogProps) => {
  return createPortal(
    <div className="dialog-backdrop" role="dialog" aria-modal="true">
      <div className="dialog-content">
        <div className="dialog-header">
          <h2 className="dialog-title">{title}</h2>
          <button
            className="dialog-close-button"
            aria-label="Close dialog"
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="dialog-body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
