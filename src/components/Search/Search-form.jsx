import React from 'react';
import { Link } from 'react-router-dom';
import '../Search/style/search-style.css'

const SearchForm = ({ searchCoin, handleInputChange, handleSearch }) => {
  return (
    <div className="header-search">
      <input
        type="text"
        placeholder="Название монеты"
        className="search-input"
        value={searchCoin}
        onChange={handleInputChange}
      />
      <Link to="/coin">
        <button className="search-button" onClick={handleSearch}>
          Поиск
        </button>
      </Link>
    </div>
  );
};

export default SearchForm;
