import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { toast } from 'react-toastify';
import "@fontsource/koulen";
import "@fontsource/nunito";

const ParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1C2C4C;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

const ShowPassword = styled.span`
    // position: relative;
    align-self: flex-start;
    // left: 250px;
    // top: 50%;
    // right: 10px;
    transform: translateY(-100%);
    font-size: 10px;
    color: #1C2C4CBC; 
    cursor: pointer;
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

const loginFunction = async(e) => {
     e.preventDefault();
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     try {  
         await axios.post('http://localhost:3001/user', {
             email: email,
             password: password
         });
         
     } catch (error) {
        
     }
}


const handleSubmit = (event) => {
    // alert('Login successful!');
    // alert(validateForm())
    event.preventDefault();
    if (validateForm() === true) {
        loginFunction(event).then((res) => {
            console.log(res);
            res.data.success ? toast.success(res) : toast.error('Invalid email or password.');
            // window.location.href = '/home';
        }).catch((err) => {
            console.log(err);
            alert("catch:" + err);
            toast.error('Invalid email or password.');
        });

        // Add your login logic here
    } else {
      toast.error('Please enter your email and password.');
    }
  };

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
    const [isSignUp, setIsSignUp] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <ParentContainer>
            <LoginContainer>
                <LogoContainer>
                    <Logo src="/logo.png" alt="logo" />
                    <LogoText>On Chain Charity</LogoText>
                </LogoContainer>
                <LoginFormContainer>
                    <LoginForm action="POST">
                        
                        <LoginFormHeader>{isSignUp ? 'Sign Up' : 'Sign In'}</LoginFormHeader>
                        {(isSignUp) && (
                            <>
                                <LoginInput type="text" id="name" name="name" placeholder="Full Name" />
                                <LoginInput type="text" id="address" name="address" placeholder="Address" />
                            </>)}
                        <LoginInput type="text" id="email" name="email" placeholder={"Email Address"} />
                        <LoginInput type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" name="password" placeholder="Password" />
                        <ShowPassword onClick={togglePasswordVisibility}>{showPassword ? 'Hide password' : 'Show password'}</ShowPassword>
                        {isSignUp && (
                            <>
                                <LoginInput type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                                <ShowPassword onClick={togglePasswordVisibility}>{showPassword ? 'Hide password' : 'Show password'}</ShowPassword>

                            </>
                        )}
                        <SubmitButton type="submit" onClick={handleSubmit}>{isSignUp ?'Sign up': 'Login'}</SubmitButton>
                    </LoginForm>
                    {isSignUp ? 
                        (<AlreadyHaveAccount>Existing User ? <a onClick={toggleSignUp}>Sign In</a></AlreadyHaveAccount>) :
                        (<AlreadyHaveAccount>Don't have an account? <a onClick={toggleSignUp}>Sign Up</a></AlreadyHaveAccount>
                    )}
                </LoginFormContainer>
            </LoginContainer>
        </ParentContainer>
    );
}
export default Login;