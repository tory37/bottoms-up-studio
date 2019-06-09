import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

const StyledHomePage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => (
  <Layout>
    <StyledHomePage>
      Welcome Home! Thanks for logging in.
      <Dashboard />
    </StyledHomePage>
  </Layout>
);

export default HomePage;
