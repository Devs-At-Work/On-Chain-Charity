import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../home/components/sidebar/sidebar";


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

const CreateCampaign = () => {
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
                <Body>
                    <DataInput placeholder="Campaign Name"/>
                    <DataInput placeholder="Campaign Creator"/>
                </Body>
                <Body><Textarea placeholder="Campaign Description" /></Body>
                <Body>
                    <DataInput placeholder="Campaign Domain"/>
                    <DataInput placeholder="Location"/>
                </Body>
                <Body>
                    <DataInput placeholder="Donation Required"/>
                    <DataInput placeholder="People Involved in campaign"/>
                </Body>
                <Body><SubmitButton>Create</SubmitButton></Body>
            </Main>
        </FixedContent>
    );
}

export default CreateCampaign;