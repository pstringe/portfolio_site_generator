import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customeTheme from './theme';
import Home from './pages/Home';

const theme = createTheme(customeTheme);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
