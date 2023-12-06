import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../home/components/sidebar/sidebar";
import { toast } from "react-toastify";
import axios from "axios";

const FixedContent = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    width: 100%;
    height: 100vh;
    // overflow: hidden;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    background-color: #1c2c4c;
    height: 100vh;
`;

const Header = styled.div`
    display: flex;
    padding:0px  15px 0px 0px ;
    flex-direction: row;
    justify-content: space-between;
`;

const Head = styled.div`
    font-family: 'Koulen', sans-serif;
    font-size: 24px;
    padding: 20px 0px 0px 20px;
    color: #C6BAD2;
    @media (max-width: 768px) {
        font-size: 20px;
    }
    
    hr{
        border: 1px solid #c2bad2;
        // width: 40%;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SearchImage = styled.img`
  width: 4%;
  align-self: center;
  color: #C6BAD2;
  padding-right: 10px;
`;

const Body = styled.div`
    // padding: 20px ;
    padding-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    `;

const DataInput = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    padding: 15px;
    width: 40%;
    border: none;
    border-radius: 10px;
    opacity: 0.8;
    color: #1C2C4CBC;
    background: linear-gradient( #C6BAD2 50%, #c6bad2 0%);
    text-decoration: none;
    // margin-bottom: 20px;
    position: relative;
    @media (max-width: 768px) {
        font-size: 14px;
    }

    &:focus {
        outline: none;
    }
`;

// textbox
const Textarea = styled.textarea`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    padding: 15px;
    max-height: 200px;
    max-width: 90%;
    min-width: 90%;
    min-height: 60px;
    border: none;
    border-radius: 10px;
    opacity: 0.8;
    color: #1C2C4CBC;
    background: linear-gradient( #C6BAD2 50%, #c6bad2 0%);
    text-decoration: none;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const SubmitButton = styled.button`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    padding: 10px;
    width: 150px;
    border: none;
    border-radius: 10px;
    // opacity: 0.8;
    color: #1C2C4CCE;
    background: linear-gradient(to right, #C6BAD2C4 20%, #c6bad2 50%, #C6BAD2C4 80%);
    text-decoration: none;
    margin-bottom: 20px;
    position: relative;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    &:focus {
        outline: none;
    }
`;

const createCampaign = async (e) => {
    const campaignName = document.getElementById('campname').value;
    const campaignCreator = document.getElementById('campcreator').value;
    const campaignDescription = document.getElementById('campdesc').value;
    const campaignDomain = document.getElementById('campdomain').value;
    const campaignLocation = document.getElementById('camploc').value;
    const donationRequired = document.getElementById('donation').value;
    const peopleInvolved = document.getElementById('people').value;
    const storedToken = localStorage.getItem('token');
    const JWT_TOKEN = storedToken;
  
    try {
      const currentDate = new Date();
      const response = await axios.post(
        'http://localhost:3001/api/campaign',
        {
          name: campaignName,
          description: campaignDescription,
          deadline: currentDate,
          domain: campaignDomain,
          location: campaignLocation,
          donationRequired,
          peopleInvolved,
        },
        {
          headers: {
            'Authorization': `Bearer ${JWT_TOKEN}`, // Replace with your actual token
          },
        }
      );
        
        alert(JWT_TOKEN)
      console.log('Campaign created successfully:', response.data);
      // Perform additional actions after creating the campaign if needed
    } catch (error) {
        console.error('Error creating campaign:', error);
        alert(JWT_TOKEN);
      alert(error); // Notify the user about the error
    }
  };
  

const handleSubmit = (event) => {
    // alert('Login successful!');
    // alert(validateForm()
    if (validateForm() === true) {
        createCampaign().then((res) => {
            if (res.status === 200) {
                alert('Campaign created successfully!');
                // toast.success('Campaign created successfully!');
            } else {
                alert('Something went wrong!');
                // toast.error('Something went wrong!');
            }
        });
    } else {
        alert('Please enter your email and password.');
      toast.error('Please enter your email and password.');
    }
  };

function validateForm() {
    try {
        const campaignName = document.getElementById('campname').value;
        const campaignCreator = document.getElementById('campcreator').value;
        const campaignDescription = document.getElementById('campdesc').value;
        const campaignDomain = document.getElementById('campdomain').value;
        const campaignLocation = document.getElementById('camploc').value;
        const donationRequired = document.getElementById('donation').value;
        const peopleInvolved = document.getElementById('people').value;
        
        if (campaignName === '' || campaignCreator === '' || campaignDescription === '' || campaignDomain === '' || campaignLocation === '' || donationRequired === '' || peopleInvolved === '') {
            alert('Please enter your email and password.');
            return false;
        }
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

const CreateCampaign = () => {

    const [campaignName, setCampaignName] = useState('');
    const [campaignCreator, setCampaignCreator] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');
    const [campaignDomain, setCampaignDomain] = useState('');
    const [campaignLocation, setCampaignLocation] = useState('');
    const [donationRequired, setDonationRequired] = useState('');
    const [peopleInvolved, setPeopleInvolved] = useState('');

    return (
        <FixedContent>
            <Sidebar />
            <Main>
                <Header>
                    <Head>
                        Create Campaign
                        <hr/>
                    </Head>
                    <SearchImage src='/profile.png'/>
                </Header>
                <Form onSubmit={handleSubmit}>

                    <Body>
                        <DataInput id="campname" value={campaignName} onChange={(e)=> setCampaignName(e.target.value)} placeholder="Campaign Name"/>
                        <DataInput id="campcreator" value={campaignCreator} onChange={(e)=> setCampaignCreator(e.target.value)} placeholder="Campaign Creator"/>
                    </Body>
                    <Body><Textarea id="campdesc" value={campaignDescription} onChange={(e)=> setCampaignDescription(e.target.value)} placeholder="Campaign Description" /></Body>
                    <Body>
                        <DataInput id="campdomain" value={campaignDomain} onChange={(e)=> setCampaignDomain(e.target.value)} placeholder="Campaign Domain"/>
                        <DataInput id="camploc" value={campaignLocation} onChange={(e)=> setCampaignLocation(e.target.value)} placeholder="Location"/>
                    </Body>
                    <Body>
                        <DataInput id="donation" value={donationRequired} onChange={(e)=> setDonationRequired(e.target.value)} placeholder="Donation Required"/>
                        <DataInput id="people" value={peopleInvolved} onChange={(e)=> setPeopleInvolved(e.target.value)} placeholder="People Involved in campaign"/>
                    </Body>
                        <Body><SubmitButton type="submit" >Create</SubmitButton></Body>
                </Form>
            </Main>
        </FixedContent>
    );
}

export default CreateCampaign;