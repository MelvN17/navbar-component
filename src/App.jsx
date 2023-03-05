import React, { useState } from 'react';
import './App.scss';
import Container from './components/Container';
import Example from './components/Example';
import Navbar from './components/Navbar';

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Container />
      <Example />
    </div>
  )
};

export default App;
