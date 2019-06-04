import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Login from '../components/Login';

const StyledLoginPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => (
  <Layout>
    <StyledLoginPage>
      <Login />
    </StyledLoginPage>
  </Layout>
);

export default LoginPage;