import React from 'react';

import styled from 'styled-components';
import './searchbar.css';
import { Link } from 'react-router-dom';

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 3vh;
    width: 60%;
    margin: 20px 10px;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    background-color: #C6BAD2;
`;

const SearchImage = styled.img`
  width: 4%;
  align-self: center;
  color: #C6BAD2;
  padding-right: 10px;
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
    // position: absolute;
    // flex-direction: row;
    // justify-content: space-between;
    height: 3vh;
    // width: 40%;
    margin: 10px 10px;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;
    border: 1px solid #C6BAD2;
    background-color: transparent;

    p{
        color: #C6BAD2;
        font-size: 12px;
    }
`;



const SearchBar = () => {
    return (
        <Nav>
            <SearchBarContainer>
                <SearchImage src='/search.png' />
                <SearchInput placeholder='Search' />
            </SearchBarContainer>
            <CreateCampaign>
                <Link className='createCampaign' to='/createCampaign'>
                    <p>Create Campaign</p>
                    </Link>
            </CreateCampaign>
            <SearchImage src='/profile.png'/>
        </Nav>
    );
};

export default SearchBar;