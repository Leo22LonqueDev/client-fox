import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { render } from 'react-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);