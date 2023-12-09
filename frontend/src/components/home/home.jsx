import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar/sidebar";
import SearchBar from "./components/searchbar/searchbar";
import "@fontsource/koulen";
import CampaignBox from "../campaignPage/components/campaignBox/campaignBox";
import axios from "axios";


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

    const fetchData = async () => {
        const storedToken = localStorage.getItem('token');
        const JWT_TOKEN = storedToken;
        try {
            const response = await axios.get('http://localhost:3001/api/campaign/list', {
                headers: {
                  'Authorization': `Bearer ${JWT_TOKEN}`, // Replace with your actual token
                },
              }
            );
            // alert(response.data);
            console.log(response.data['data'][0]['description']);
            return response.data['data'];
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



const Home = () => {
    const [campaigns, setCampaigns] = useState([]); // State to store fetched data

    useEffect(() => {
        // Call fetchData when the component is mounted
        fetchData()
            .then(data => setCampaigns(data)) // Update state with fetched data
            .catch(error => console.error('Error setting state:', error));
    }, []); // Em

    const lastFourCampaigns = campaigns.slice(-4);

    return (
        <FixedContent>
            <Sidebar />
            <Main>
                <SearchBar />
                <SubHeader>
                    <p>Associated Campaigns</p>
                    <hr />
                </SubHeader>
                <NgoGrid>
                {lastFourCampaigns.map(campaign => (
                        <CampaignBox
                            key={campaign.id}
                            id={campaign.id}
                            name={campaign.name}
                            description={campaign.description}
                            donationAmount={campaign.donationRequired}
                        />
                    ))}
                </NgoGrid>
            </Main>
        </FixedContent>
    );
};

export default Home;