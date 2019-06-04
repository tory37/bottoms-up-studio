import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import _ from 'lodash';

import BUSButton from './BUSButton';

const StyledSignup = styled.div`
  width: 450px;
  height: auto;
  padding: 48px 40px 36px;
  border: ${props => props.theme.borders.default.border};
  border-radius: ${props => props.theme.borders.default.radius};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .title-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title {
      font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3333;
      align-self: center;
    }

    a {
      font-size: 10px;
    }
  }

  form {
    width: 100%;
  }

  label {
    /* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center; */
    margin-top: 25px;
    width: 100%;
    display: inline-block;
    height: 54px;

    span {
      /* width: 115px;
      margin-right: 20px; */
      font-size: 12px;
      color: darkgray;
    }

    input {
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }

  .bus-button {
    margin-left: auto;
    margin-top: 25px;
  }
`;

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    errors: {},
  });

  const onChange = (e) => {
    // TODO: ASK ABOUT THIS
    const moddedState = _.clone(login);
    moddedState[e.target.id] = e.target.value;
    setLogin(moddedState);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: login.email,
      password: login.password,
    };

    console.log(user);
  };

  const emailLabel = 'Email';
  const passwordLabel = 'Password';

  const emailSpan = login.email.length > 0 ? emailLabel : '\u00A0';
  const passwordSpan = login.password.length > 0 ? passwordLabel : '\u00A0';

  return (
    <StyledSignup>
      <form noValidate onSubmit={onSubmit}>
        <div className="title-row">
          <div className="title">Login</div>
          <Link to="/signup">Login</Link>
        </div>

        <label htmlFor="email">
          <span>{emailSpan}</span>
          <input
            onChange={onChange}
            value={login.email}
            error={login.errors.email}
            id="email"
            type="email"
            placeholder={emailLabel}
          />
        </label>

        <label htmlFor="password">
          <span>{passwordSpan}</span>
          <input
            onChange={onChange}
            value={login.password}
            error={login.errors.password}
            id="password"
            type="password"
            placeholder={passwordLabel}
          />
        </label>

        <div className="bus-button">
          <BUSButton className="bus-button" />
        </div>
      </form>
    </StyledSignup>
  );
};

export default Login;