import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    padding-top: 5px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    margin-top: 4%;
    background-color: #C6BAD2C4;
    // height: 100vh;
    border-radius: 10px;
`;

const NgoHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;

    p{
        font-size: 20px;
        color: #1C2C4C;
        align-self: justify;
        font-family: 'Nunito', sans-serif;
    }

    img{
        width: 35px;
        height: 40px;
    }
`;

const NgoDescription = styled.p`
    font-size: 14px;
    color: #1C2C4C;
    text-align: left;
    font-family: 'Nunito', sans-serif;
`;

const OngoingCampaigns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #1C2C4C;
    font-size: 12px;
    border: 1.5px solid #1C2C4C;
    border-radius: 10px;
    padding: 5px 10px;
    width: fit-content;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`;

const KnowMore = styled.div`

    color: #1C2C4C;
    font-size: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content:end;
    align-items: center;
    img{
        padding-left: 5px;
        width: 15px;
        height:10px;

    }
    `;


const CampaignBox = () => {
    // generate random amount for donating to campaigns 1000 to 10000000
    const amount = Math.floor(Math.random() * 10000000) + 1000;

    return (

            <Main>
                <NgoHeader>
                    <p>Campaign 1</p>
                    <img src="/ngologo.png"/>
                </NgoHeader>
                <NgoDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error voluptatem molestiae libero tenetur consequuntur cupiditate eum sunt impedit, laboriosam sequi voluptas, ut eius adipisci qui. Repellendus reprehenderit voluptatum doloremque!</NgoDescription>
                <OngoingCampaigns>
                    Donate: ₹ {amount.toLocaleString('en-IN')}
                </OngoingCampaigns>
                <KnowMore>
                    <p>Know More</p>
                    <img src="/right-arrow.png" />
                </KnowMore>
            </Main>
    );
}   

export default CampaignBox;