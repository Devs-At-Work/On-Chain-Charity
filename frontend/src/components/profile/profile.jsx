import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 0px;

    h1{
        font-size: 20px;
        color: #C6BAD2;
        align-self: justify;
        font-family: 'Nunito', sans-serif;
    }
`;



const Profile = () => {
    return (
        <ProfileContainer>
            <h1>Profile</h1>
        </ProfileContainer>
    );
}
    
export default Profile;