import React from 'react';
import styled from 'styled-components';

const StyledNewsTicker = styled.marquee`
  height: 20px;
  width: 100%;
  font-size: 10px;
  background-color: black;
  color: ${props => props.theme.lemon};

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function NewsTicker() {
  return (
    <StyledNewsTicker>
      <div className="container">Work in progress, coming soon!</div>
    </StyledNewsTicker>
  );
}
