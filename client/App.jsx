import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LSContainer from './Components/LoginSignup/LSContainer';
import HomePageContainer from './Components/HomePage/HomePageContainer';
import AboutUs from './Components/LoginSignup/AboutUs';

const App = () => {
  //THIS IS A FUNCTION JUST FOR TESTING IF THE BACKEND AND FRONTEND IS CONNECTED
  const onclick = () => {
    fetch('/test').then(console.log('testing'));
  };
  return (
    <Routes>
      <Route path='/' element={<LSContainer />} />
      <Route path='/homepage' element={<HomePageContainer />} />
      <Route path='/aboutus' element={<AboutUs />} />
    </Routes>
  );
};

export default App;
