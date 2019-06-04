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

const Signup = () => {
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  });

  const onChange = (e) => {
    // TODO: ASK ABOUT THIS
    const moddedState = _.clone(signup);
    moddedState[e.target.id] = e.target.value;
    setSignup(moddedState);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: signup.name,
      email: signup.email,
      password: signup.password,
      password2: signup.password,
    };

    console.log(newUser);
  };

  const nameLabel = 'Name';
  const emailLabel = 'Email';
  const passwordLabel = 'Password';
  const password2Label = 'Confirm Password';

  const nameSpan = signup.name.length > 0 ? nameLabel : '\u00A0';
  const emailSpan = signup.email.length > 0 ? emailLabel : '\u00A0';
  const passwordSpan = signup.password.length > 0 ? passwordLabel : '\u00A0';
  const password2Span = signup.password2.length > 0 ? password2Label : '\u00A0';

  return (
    <StyledSignup>
      <form noValidate onSubmit={onSubmit}>
        <div className="title-row">
          <div className="title">Signup</div>
          <Link to="/login">Create An Account</Link>
        </div>

        <label htmlFor="name">
          <span>{nameSpan}</span>
          <input
            onChange={onChange}
            value={signup.name}
            error={signup.errors.name}
            id="name"
            type="text"
            placeholder={nameLabel}
          />
        </label>

        <label htmlFor="email">
          <span>{emailSpan}</span>
          <input
            onChange={onChange}
            value={signup.email}
            error={signup.errors.email}
            id="email"
            type="email"
            placeholder={emailLabel}
          />
        </label>

        <label htmlFor="password">
          <span>{passwordSpan}</span>
          <input
            onChange={onChange}
            value={signup.password}
            error={signup.errors.password}
            id="password"
            type="password"
            placeholder={passwordLabel}
          />
        </label>

        <label htmlFor="password2">
          <span>{password2Span}</span>
          <input
            onChange={onChange}
            value={signup.password2}
            error={signup.errors.password2}
            id="password2"
            type="password"
            placeholder={password2Label}
          />
        </label>

        <div className="bus-button">
          <BUSButton className="bus-button" />
        </div>
      </form>
    </StyledSignup>
  );
};

export default Signup;
