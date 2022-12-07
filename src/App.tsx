import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { useSelector } from 'react-redux';


function App() {

  const mode = useSelector((state:any)=> state.mode.toggle)
  useEffect(()=>{
    console.log(mode)
  },[])
  return (
    <div className="App" data-theme={mode ? 'dark-mode': 'light-mode'}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
