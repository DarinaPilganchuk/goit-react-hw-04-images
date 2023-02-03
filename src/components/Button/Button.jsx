import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


 const Button = ({ onloadMore }) => {
  return (
    <div className="Button-container" onClick={onloadMore}>
      <button type="button" className="Button">
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;

