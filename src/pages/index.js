// import React from 'react';

// import Layout from '../components/Layout';
// import Image from '../components/image';
// import SEO from '../components/seo';

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hello</h1>
//     <p>Welcome to BottomsUpStudio.com</p>
//     <p>Work is in progress, but this will be the futue site of a bunch of random things.</p>
//     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//       <Image />
//     </div>
//   </Layout>
// );

// export default IndexPage;

import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import WelcomeBubble from '../components/WelcomeBubble';

const baseBorderWidth = '3px';

const StyledWelcomePage = styled.div`
  padding-top: 50px;

  .header-outter {
    border-top: solid 1px black;
    border-bottom: solid 1px black;

    .header-middle {
      border-top: solid 2px gold;
      border-bottom: solid 2px gold;

      .header-inner {
        border-top: solid 1px black;
        border-bottom: solid 1px black;
        padding-top: 10px;
        padding-bottom: 10px;

        text-align: center;

        .title {
          font-size: 24px;
        }
      }
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-align: center;

    .options {
      width: 50%;
      margin-top: 30px;
      border-top: solid ${props => props.baseBorderWidth} black;
      border-bottom: solid ${props => props.baseBorderWidth} black;
    }
  }

  .bubbles {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .bubble-wrapper {
      width: 25vw;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

const StyledOption = styled.div`
  border-top: solid ${props => props.baseBorderWidth} black;
  border-bottom: solid ${props => props.baseBorderWidth} black;
  text-align: end;
  font-size: 24px;
  padding: 15px;
  background-color: ${props => (props.royal && '#4B0082') || (props.brick && '#B22222') || (props.leaf && '#285406')};
  position: relative;

  .psuedo-border {
    height: 100%;
    width: calc(${props => props.baseBorderWidth} * 2);
    background-color: black;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:hover {
    .psuedo-border {
      background-color: ${props => (props.royal && '#4B0082') || (props.brick && '#B22222') || (props.leaf && '#285406')};
    }
  }
`;

const potentialEmployerDesc = "Click here if you are a potential employer looking for Tory Hebert's resume.";
const returningUserDesc = 'Click here to login if you are a returning user.';
const newUserDesc = "Click here to create an account if you'd like to join.";

const WelcomePage = () => (
  <StyledWelcomePage baseBorderWidth={baseBorderWidth}>
    <div className="header-outter">
      <div className="header-middle">
        <div className="header-inner">
          <div className="title">Welcome to BottomsUpStudio.com!</div>
          <div className="subtitle">Why are you here?</div>
        </div>
      </div>
    </div>

    <div className="content">
      <div className="options">
        <StyledOption royal baseBorderWidth={baseBorderWidth}>
          Potential Employer
          <div className="psuedo-border" />
        </StyledOption>
        <StyledOption brick baseBorderWidth={baseBorderWidth}>
          Returning User
          <div className="psuedo-border" />
        </StyledOption>
        <StyledOption leaf baseBorderWidth={baseBorderWidth}>
          New User
          <div className="psuedo-border" />
        </StyledOption>
      </div>
    </div>

    <div className="bubbles">
      <Link to="/building">
        <div className="bubble-wrapper">
          <WelcomeBubble
            title="Potential Employer"
            description={potentialEmployerDesc}
            color="#4B0082"
          />
        </div>
      </Link>

      <Link to="/login">
        <div className="bubble-wrapper">
          <WelcomeBubble title="Returning User" description={returningUserDesc} color="#B22222" />
        </div>
      </Link>

      <Link to="signup">
        <div className="bubble-wrapper">
          <WelcomeBubble title="New User" description={newUserDesc} color="#FFDB00" />
        </div>
      </Link>
    </div>
  </StyledWelcomePage>
);

export default WelcomePage;
