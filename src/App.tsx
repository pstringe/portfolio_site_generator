import React from 'react';
import logo from './logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customeTheme from './theme';
  
const theme = createTheme(customeTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        
      </div>
    </ThemeProvider>
  );
}

export default App;
