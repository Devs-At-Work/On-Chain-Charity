import React from 'react';
import styled from 'styled-components';
import "@fontsource/koulen";
import "@fontsource/nunito";

const SidebarContainer = styled.div`
  width: 18%;
  background-color: #2A2C4C;
  display: flex;
  flex-direction: column;
  color: white;
  // justify-content: space-between;
  padding: 20px;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarTitle = styled.h1`
  font-family: 'Koulen', sans-serif;
  font-size: 24px;
  color: #C6BAD2;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SidebarLink = styled.a`
  font-family: 'Koulen', sans-serif;
  font-size: 20px;
  color: #C6BAD2;
  text-decoration: none;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #C6BAD2;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const SidebarLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  `;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 80%;
  margin-top: 5em;
  align-self: center;
`;


const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src="/applogo.png" alt="Logo" />
      <SidebarTitle>On Chain Charity</SidebarTitle>
    </LogoContainer>
  );
};

const CopyrightBox = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 12px;
  color: white;
  text-align: center;
  // margin-top: auto;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo />
      <SidebarLinkBox>
        <SidebarLink href="#">Home</SidebarLink>
        <SidebarLink href="#">About</SidebarLink>
        <SidebarLink href="#">Contact</SidebarLink>
      </SidebarLinkBox>
      <CopyrightBox>
        © 2023 On Chain Charity. All rights reserved.
      </CopyrightBox>
    </SidebarContainer>
  );
};

export default Sidebar;