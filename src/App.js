import './App.css';
import Header from './components/Header'
import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PreReqs from './components/PreReqs';
import Processes from './components/Processes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NotFound from './NotFound';
import 'typeface-roboto';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto',
    },
  });

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
      <Header/>
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/prereqs" element={<PreReqs/>} />
          <Route path="/processes" element={<Processes/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </div>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
