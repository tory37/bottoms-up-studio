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
// TODO: Wrap app in theme and use withTheme here to pass the colors
// import { withTheme } from 'emotion-theming';

import WelcomeBubble from '../components/WelcomeBubble';

const StyledWelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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

const potentialEmployerDesc = "Click here if you are a potential employer looking for Tory Hebert's resume.";
const returningUserDesc = 'Click here to login if you are a returning user.';
const newUserDesc = "Click here to create an account if you'd like to join.";

const WelcomePage = () => (
  <StyledWelcomePage>
    <div className="title">Welcome to BottomsUpStudio.com!</div>
    <div className="subtitle">Why are you here?</div>

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
