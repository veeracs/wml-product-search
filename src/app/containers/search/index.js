import React from 'react';

import './index.css';

const Search = () => {
  return (
    <div className="search-container">
      <input className="search-input" type="search" name="search" placeholder="" />
      <input  className="search-button" type="submit" value="Search" />
    </div>
  )
}

export default Search;
