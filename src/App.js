/* eslint-disable no-undef */
// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import Admin from './component/core/Admin';
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Admin/>
    </ThemeProvider>
  );
}

export default App;
