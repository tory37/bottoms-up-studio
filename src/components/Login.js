import React from 'react';
import styled from '@emotion/styled';
import BUSInput from './BUSInput';
import BUSButton from './BUSButton';

const StyledLogin = styled.div`
  width: 450px;
  height: auto;
  padding: 48px 40px 36px;
  border: ${props => props.theme.borders.default.border};
  border-radius: ${props => props.theme.borders.default.radius};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .title {
    font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3333;
    align-self: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 25px;
    width: 100%;
  }

  .label {
    width: 102px;
    margin-right: 20px;
  }

  .bus-input {
    flex-grow: 1;
  }

  .bus-button {
    margin-left: auto;
    margin-top: 25px;
  }
`;

const Login = () => (
  <StyledLogin>
    <div className="title">Login</div>

    <div className="row">
      <div className="label">Username</div>
      <div className="bus-input">
        <BUSInput />
      </div>
    </div>

    <div className="row">
      <div className="label">Password</div>
      <div className="bus-input">
        <BUSInput />
      </div>
    </div>

    <div className="bus-button">
      <BUSButton className="bus-button" />
    </div>
  </StyledLogin>
);

export default Login;
