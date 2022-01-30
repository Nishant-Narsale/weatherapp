import React from 'react';
import './searchbar.css';

const SearchBar = () => {
  return (
    <div>
      <div class="wrapper">
          <div class="container">
          <form role="search" class="search-form form">
              <label>
                  <span class="screen-reader-text">Search for...</span>
                  <input type="search" class="search-field" placeholder="Enter city name...." value="" name="s" title="" />
              </label>
              <input type="button" class="search-submit button" value="Search" />
          </form>
          </div>
      </div>
    </div>
  );
};

export default SearchBar;
