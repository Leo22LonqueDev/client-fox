import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import ReactDOM from "react-dom/client";

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  // document.getElementById('root')
);