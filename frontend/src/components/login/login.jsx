import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import "@fontsource/koulen";
import "@fontsource/nunito";

const ParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;


const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    // margin: auto;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 60%;
`;

const LogoText = styled.h1`
    font-family: 'Koulen', sans-serif;
    font-size: 2.5em;
    color: #C6BAD2;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 30px 40px  ;
    background: linear-gradient(to bottom right, #C6BAD2, #5E5C9C);
`;

const LoginFormHeader = styled.p`
    font-family: 'Koulen', sans-serif;
    font-size: 40px;
    color: #1C2C4C;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginInput = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    padding: 10px;
    width: 300px;
    border: none;
    border-radius: 10px;
    opacity: 0.8;
    color: #1C2C4CBC;
    background: linear-gradient( #C6BAD2 50%, #c6bad2 0%);
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

const SubmitButton = styled.button`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    padding: 10px;
    width: 150px;
    border: none;
    border-radius: 10px;
    // opacity: 0.8;
    color: #1C2C4CCE;
    background: linear-gradient(#C6BAD2 50%, #c6bad2 100%, #c6bad2 50%);
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

const AlreadyHaveAccount = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    color: #D9D9D9;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 12px;
    }

    a {
        color: #D9D9D9;
        font-weight: bold;
        text-decoration: none;
        &:hover {
            color: #c6bad2;
            text-decoration: none;
        }
    }
`;


const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        // Add your login logic here
    } else {
      toast.error('Please enter your email and password.');
    }
  };
  
const Divider = styled.hr`
    width: 90%;
    background-color: #C6BAD2;
`;

function validateForm() {
    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email, password)
  
        if (email === '' || password === '') {
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
  
const Login = () => {
    return (
        <ParentContainer>
            <LoginContainer>
                <LogoContainer>
                    <Logo src="/logo.png" alt="logo" />
                    <LogoText>On Chain Charity</LogoText>
                </LogoContainer>
                <LoginFormContainer>
                    <LoginForm>
                        <LoginFormHeader>Sign In</LoginFormHeader>
                        <LoginInput type="text" id="email" name="email" placeholder="Email Address" />
                        <LoginInput type="password" id="password" name="password" placeholder="Password" />
                        <SubmitButton type="submit" onClick={handleSubmit}>Login</SubmitButton>
                    </LoginForm>
                    <AlreadyHaveAccount>Don't have an account? <a href="/signup">Sign Up</a></AlreadyHaveAccount>
                    <Divider></Divider >
                    <AlreadyHaveAccount><a>Register as an Organization</a></AlreadyHaveAccount>
                </LoginFormContainer>
            </LoginContainer>
        </ParentContainer>
    );
}

export default Login;