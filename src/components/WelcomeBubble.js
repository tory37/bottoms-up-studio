import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledWelcomeBubble = styled.div`
  position: relative;
  width: 90%;
  /* width: 100%;
  height: 200px; */
  background-color: ${props => props.color};
  cursor: pointer;
  border-radius: 10px;
  color: white;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-left: 5px;
    margin-right: 5px;
    text-align: center;

    .title {
      margin-top: 25%;
      font-size: 24px;
    }

    .description {
      margin-top: 5px;
      font-size: 14px;
    }
  }

  &:hover {
      width: 100%;

      .title {
        font-size: 28px;
      }

      .description {
        font-size: 16px;
      }
    }s

  /* min-width: 100%;
  height: auto; */
`;

const WelcomeBubble = ({ title, description, color }) => (
  <StyledWelcomeBubble color={color}>
    <div className="wrapper">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  </StyledWelcomeBubble>
);

WelcomeBubble.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default WelcomeBubble;
