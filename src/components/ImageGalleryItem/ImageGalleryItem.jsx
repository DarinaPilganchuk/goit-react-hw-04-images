import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';
// import {Modal} from '../Modal/Modal';

 const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};

export default ImageGalleryItem

