import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Layout/Footer/Footer';
import { useSelector } from 'react-redux';
import Layout from './Components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import LogPopUp from './Components/LoggComponent/LogPopUp';


function App() {
  const mode = useSelector((state: any) => state.mode.toggle)
  const LoggedSelector = useSelector((state: any) => state.logged)
  

  return (
    <div className="App" data-theme={mode ? 'dark-mode' : 'light-mode'}>
      {/* <Layout /> */}
      <Routes>
        {
          LoggedSelector === false ?
            <Route path='*' element={<LogPopUp />}></Route>
            :
            <Route path='*' element={<Layout />}></Route>
        }
      </Routes>

    </div>
  );
}

export default App;
