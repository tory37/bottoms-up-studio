import React from 'react';
import styled from '@emotion/styled';
// TODO: Wrap app in theme and use withTheme here to pass the colors
// import { withTheme } from 'emotion-theming';

const StyledWelcomePage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .welcomeBubble {
    width: 20vw;
  }
`;

const potentialEmployerDesc = "Click here if you are a potential employer looking for Tory Hebert's resume.";
const returningUserDesc = 'Click here to login if you are a returning user.';
const newUserDesc = "Click here to create an account if you'd like to join.";

const WelcomePage = () => (
  <StyledWelcomePage>
    <div className="title">Welcome to BottomsUpStudio.com!</div>
    <div className="subtitle">Why are you here?</div>

    <WelcomeBubble
      className="welcomeBubble"
      title="Potential Employer"
      description={potentialEmployerDesc}
      color="#4B0082"
    />
    <WelcomeBubble
      className="welcomeBubble"
      title="Returning User"
      description={returningUserDesc}
      color="#B22222"
    />
    <WelcomeBubble
      className="welcomeBubble"
      title="New User"
      description={newUserDesc}
      color="#FFDB00"
    />
  </StyledWelcomePage>
);

export default WelcomePage;
