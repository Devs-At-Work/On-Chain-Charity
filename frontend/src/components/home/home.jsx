import React from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import SearchBar from "./components/searchbar/searchbar";
import NgoBox from "./components/ngo-box/ngo_box";
import "@fontsource/koulen";


const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
    background-color: #1c2c4c;
`;

const FixedContent = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    width: 100%;
    margin: auto;
    min-height: 100vh;
    // overflow: hidden;
`;

const NgoGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;

const SubHeader = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;

    p{
        padding: 20px;
        color: #c2bad2;
        font-family: 'Koulen', sans-serif;
        font-size: 28px;
        // font-weight: 700;
        text-align: center;
        margin: 0;
    }
    hr{
        border: 1px solid #c2bad2;
        width: 40%;
    }
    `;



const Home = () => {
    return (
        <FixedContent>
            <Sidebar />
            <Main>
                <SearchBar />
                <SubHeader>
                    <p>Associated NGOs</p>
                    <hr />
                </SubHeader>
                <NgoGrid>
                    <NgoBox />
                    <NgoBox />
                    <NgoBox />
                    <NgoBox />
                </NgoGrid>
            </Main>
        </FixedContent>
    );
};

export default Home;