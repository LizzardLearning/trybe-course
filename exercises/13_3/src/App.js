import React from 'react';
import MainPage from './components/MainPage'
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
