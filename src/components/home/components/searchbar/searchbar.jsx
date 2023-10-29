import React from 'react';

import styled from 'styled-components';
import './searchbar.css';

const SearchImage = styled.img`
  width: 6%;
  align-self: center;
  color: #C6BAD2;
`;

const SearchBar = () => {
    return (
        <div className="searchbar-container">
            <SearchImage src="/search.png" />
            <input
                className="searchbar-input"
                type="text"
                name="search"
                placeholder="Search for charities"
            />
        </div>
    );
};

export default SearchBar;