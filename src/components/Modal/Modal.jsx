import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const ModalRoot = document.querySelector('#ModalRoot');

 const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown',handleKeyDown );
    };
  });

  const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

   

  const onOverlayClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };


    return  createPortal(
      <div onClick={onOverlayClose} className="Overlay">
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      ModalRoot
    );
  }




Modal.propTypes = {
  onClose: PropTypes.func,
};
export default Modal