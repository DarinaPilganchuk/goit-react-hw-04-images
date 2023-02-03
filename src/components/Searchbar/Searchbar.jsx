import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';
import { ImSearch }  from 'react-icons/im';



export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter something');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span>
            <ImSearch size={25} stroke="#3f51b5" />
          </span>
        </button>

        <input
          className="SearchForm-input "
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

