import React from 'react';
import styled from '@emotion/styled';

const StyledBUSInput = styled.div`
  input {
    font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    height: 24px;
    line-height: 24px;
    width: 100%;
  }
`;

const BUSInput = () => (
  <StyledBUSInput>
    <input type="text" />
  </StyledBUSInput>
);

export default BUSInput;
