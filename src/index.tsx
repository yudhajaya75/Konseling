import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/navbar/navbar.css';
import './components/card/card.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
