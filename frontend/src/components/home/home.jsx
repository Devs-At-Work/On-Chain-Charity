import React from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import SearchBar from "./components/searchbar/searchbar";
import NgoBox from "./components/ngo-box/ngo_box";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    background-color: #1c2c4c;
    height: 100vh;
`;

const FixedContent = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    width: 100%;
    height: 100vh;
    // overflow: hidden;
`;

const NgoGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;


const Home = () => {
    return (
        <FixedContent>
            <Sidebar />
            <Main>
                <SearchBar />
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