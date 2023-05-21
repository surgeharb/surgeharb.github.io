import { FC, useEffect, useRef, SyntheticEvent, KeyboardEvent } from 'react';
import './styles.module.css';

interface ModalProps {
  onClose?: () => void;
  onSubmit?: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose = () => {}, onSubmit = () => {}, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  let previouslyFocused: Element | null = null;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      previouslyFocused = document.activeElement;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        // trap focus
        const nodes = modalRef.current.querySelectorAll('*');
        const tabbable = Array.from(nodes).filter((n: any) => n.tabIndex >= 0);

        let index = tabbable.indexOf(document.activeElement as Element);
        if (index === -1 && e.shiftKey) index = 0;

        index += tabbable.length + (e.shiftKey ? -1 : 1);
        index %= tabbable.length;

        (tabbable[index] as HTMLElement).focus();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused && previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  const handleClickOutside = (e: SyntheticEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div className="modal-background" onClick={handleClickOutside}>
      <div className="modal" role="dialog" aria-modal="true" ref={modalRef}>
        {children}
        <hr />
        <div className="btn-group">
          <button autoFocus onClick={onClose}>
            Cancel
          </button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
