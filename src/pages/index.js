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
import StyledShadowedBox from '../styles/StyledShadowedBox';

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
    justify-content: space-around;
    flex-align: center;
    margin-top: 20px;

    .welcome-bubble {
      width: 225px;

      a {
        text-decoration: none;
        color: ${props => props.theme.textColor};
      }

      .image {
        height: 85px;
        background-color: #4b0082;
      }

      .body {
        padding: 10px;
        background-color: white;

        .title {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .description {
          font-size: 12px;
          color: ${props => props.theme.lightTextColor};
          line-height: 12px;
        }
      }
    }
  }
`;

const potentialEmployerDesc = "Click here if you are a potential employer looking for Tory Hebert's resume.";
const returningUserDesc = 'Click here to login if you are a returning user.';
const newUserDesc = "Click here to create an account if you'd like to join.";

const WelcomePage = () => (
  <StyledWelcomePage>
    <div className="header-outter">
      <div className="header-middle">
        <div className="header-inner">
          <div className="title">Welcome to BottomsUpStudio.com!</div>
          <div className="subtitle">Why are you here?</div>
        </div>
      </div>
    </div>

    <div className="content">
      <div className="welcome-bubble">
        <Link to="/building">
          <StyledShadowedBox>
            <div className="image" />
            <div className="body">
              <div className="title">Potential Employer</div>
              <div className="description">
                Click here to see resume information for Tory Hebert
              </div>
            </div>
          </StyledShadowedBox>
        </Link>
      </div>
    </div>

    {/* <div className="bubbles">
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
    </div> */}
  </StyledWelcomePage>
);

export default WelcomePage;
