'use client';
// Next.js feature for changing setting from SSR to client (because using HOOKS and handleSearch pre-rendering page)

import React from 'react';
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
// UseState for remembering what we have chose in search

// SearchManufacturer - component manage search and autocomplete part

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
