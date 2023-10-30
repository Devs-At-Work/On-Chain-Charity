import React from 'react';

import styled from 'styled-components';
import './searchbar.css';

const Nav = styled.nav`
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    align-items: center;
    // height: 8vh;
    // width: 100%;
    background-color: #C6BAD2;
    padding: 0 20px 0 20px;
    // position: fixed;
    // z-index: 1;
`;

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    height: 3vh;
    width: 50%;
    margin: 20px 30px;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    background-color: #C6BAD2;
`;

const SearchImage = styled.img`
  width: 4%;
  align-self: center;
  color: #C6BAD2;
`;

const SearchInput = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    padding: 10px;
    width: 300px;
    border: none;
    border-radius: 10px;
    opacity: 0.8;
    color: #1C2C4C;
    text-decoration: none;
    background: none;
    position: relative;
    @media (max-width: 768px) {
        font-size: 14px;
    }

    &:focus {
        outline: none;
    }
`;

const CreateCampaign = styled.div`
    display: flex;
    position: absolute;
    // flex-direction: row;
    // justify-content: space-between;
    height: 3vh;
    // width: 50%;
    margin: 20px 30px;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    border: 1px solid #C6BAD2;
    background-color: transparent;
    `;

const SearchBar = () => {
    return (
        <Nav>
            <SearchBarContainer>
                <SearchImage src='/search.png' />
                <SearchInput placeholder='Search' />
                
            </SearchBarContainer>
            <CreateCampaign>
            <p>Create Campaign</p>
                </CreateCampaign>
        </Nav>
    );
};

export default SearchBar;