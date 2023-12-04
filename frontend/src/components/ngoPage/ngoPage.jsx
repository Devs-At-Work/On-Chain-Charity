import React from "react";
import styled from "styled-components";
import Sidebar from "../home/components/sidebar/sidebar";
import SearchBar from "../home/components/searchbar/searchbar";
import CampaignBox from "./components/campaignBox/campaignBox";

const FixedContent = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    width: 100%;
    margin: auto;
    min-height: 100vh;
    // overflow: hidden;=
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
    background-color: #1c2c4c;
`;

const NgoName = styled.p`
    font-size: 1.7em;
    font-weight: 700;
    padding: 0 0 0 4%;
    color: #c2bad2;
    align-self: justify;
    font-family: 'Nunito', sans-serif;
`;

const NgoDescription = styled.p`
    font-size: 1em;
    font-weight: bold;
    padding: 0 4% 0 4%;
    color: #c2bad2;
    align-self: justify;
    font-family: 'Nunito', sans-serif;
    `;

const CampaignGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;

const NgoPage = () => {
    return (
        <FixedContent>
            <Sidebar />
            <Main>
                <SearchBar />
                <NgoName>NGO NAME</NgoName>
                <NgoDescription>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, incidunt minima? Asperiores, minus sapiente incidunt reiciendis unde, veritatis perspiciatis quas enim voluptates laboriosam magni iste beatae saepe dicta impedit dignissimos?</NgoDescription>
                
                <CampaignGrid>
                    <CampaignBox />
                    <CampaignBox />
                    <CampaignBox />
                </CampaignGrid>
            </Main>
        </FixedContent>
    );
};

export default NgoPage;