// StyledButton.js
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.9);
    &:hover {
        background-color: #45a049;
    &:active {
        background-color: #45a049;
        transform: translateY(3px);
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0);
  }
`;

const StyledButton = (props) => {
  return <Button>{props.label}</Button>;
};

export default StyledButton;
