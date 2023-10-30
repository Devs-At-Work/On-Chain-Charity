import React from "react";
import styled from "styled-components";
import "@fontsource/koulen";
import "@fontsource/nunito";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    padding-top: 5px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    margin-top: 30px;
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


const NgoBox = () => {
    return (
        <Main>
            <NgoHeader>
                <p>NGO Name</p>
                <img src="/ngologo.png"/>
            </NgoHeader>
            <NgoDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error voluptatem molestiae libero tenetur consequuntur cupiditate eum sunt impedit, laboriosam sequi voluptas, ut eius adipisci qui. Repellendus reprehenderit voluptatum doloremque!</NgoDescription>
        </Main>
    );
}   

export default NgoBox;