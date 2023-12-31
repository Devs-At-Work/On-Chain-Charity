import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../home/components/sidebar/sidebar";
import SearchBar from "../home/components/searchbar/searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useParams } from "react-router-dom";

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

const CampaignName = styled.p`
    font-size: 1.7em;
    font-weight: 700;
    padding: 0 0 0 4%;
    color: #c2bad2;
    align-self: justify;
    font-family: 'Nunito', sans-serif;
`;

const CampaignDescription = styled.p`
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

const Number = styled.div`
    font-size: 3.5em;
    font-weight: 700;
    // padding: 0 0 0 4%;
    color: #c2bad2;
    align-self: justify;
    font-family: 'Koulen', sans-serif;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
`;

const Row = styled.div`
    padding-top: ${props => props.paddingTop || '5%'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const Text = styled.p`
    font-size: ${(props) => props.fontsize || '16px'};
   padding: 0px;
    color: #c2bad2;
    align-self: justify;
    font-family: 'Nunito', sans-serif;
    `;  

const DonateButton = styled.button`
    background-color: #1c2c4c;
    align-self: center;
    color: #c2bad2;
    width: fit-content;
    align-items: center;
    font-size: 1em;
    font-weight: bold;
    padding: 0.5em 3em 0.5em 3em;
    border: 2px solid #c2bad2;
    border-radius: 20px;
    font-family: 'Nunito', sans-serif;
    margin: 1em;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #c2bad2;
        color: #1c2c4c;
    }
`;

const HeartIcon = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
`;




const IncreasingNumber = ({ maxNumber , duration}) => {
    const [number, setNumber] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setNumber((prevNumber) => {
          const nextNumber = prevNumber + 1;
          return nextNumber <= maxNumber ? nextNumber : prevNumber;
        });
      }, duration); // Update every second (adjust the interval as needed)
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [maxNumber]); // Include maxNumber in the dependency array
  
    return <Number>{number}</Number>;
  };
  

const CampaignPage = () => {

    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const storedToken = localStorage.getItem('token');
    const JWT_TOKEN = storedToken;
    
    useEffect(() => {
        const fetchCampaignDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/campaign/${id}`, {
                    headers: {
                      'Authorization': `Bearer ${JWT_TOKEN}`, // Replace with your actual token
                    },
                  });
                // alert(response.data);
                setCampaign(response.data['data']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        fetchCampaignDetails();
    }, [id, JWT_TOKEN]);

    if (!campaign) {
        return <div>Loading..</div>
    }

    return (
        <FixedContent>
            <Sidebar />
            <Main>
                <SearchBar />
                <CampaignName>{campaign.name}</CampaignName>
                <CampaignDescription>{campaign.description}</CampaignDescription>
                <Row paddingTop="100px">
                    <Column>
                        <Text fontsize= "1.2em">Connected People</Text>
                        <IncreasingNumber maxNumber={159} duration={30}/>   
                        <Text>Persons</Text>
                    </Column>
                    <Column>
                        <Text fontsize= "1.2em">Donation Required</Text>
                        <IncreasingNumber maxNumber={14780} duration={0.0000005}/>   
                        <Text>₹ Rupees</Text>
                    </Column>
                    <Column>
                        <Text fontsize= "1.2em">Ongoing Since</Text>
                        <IncreasingNumber maxNumber={15} duration={30}/>
                        <Text>Months</Text>
                    </Column>
                </Row>
                <DonateButton><HeartIcon icon={faHeart} /> Donate</DonateButton>
            </Main>
        </FixedContent>
    );
};

export default CampaignPage;