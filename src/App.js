import React from 'react';
import StyledButton from './component/StyledButton';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Exercise 1: <span> Styling Components</span></h1>
      <StyledButton label="Click me" />
      <StyledButton label="Submit" />
      <StyledButton label="Custom Label" />

    </div>
  );
};

export default App;
