import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LSContainer from './Components/LoginSignup/LSContainer';
import HomePageContainer from './Components/HomePage/HomePageContainer';

const App = () => {
  //THIS IS A FUNCTION JUST FOR TESTING IF THE BACKEND AND FRONTEND IS CONNECTED
  const onclick = () => {
    fetch('/test').then(console.log('testing'));
  };
  return (
    <Routes>
      <Route path='/' element={<LSContainer />} />
      <Route path='/homepage' element={<HomePageContainer/>} />
    </Routes>
  );
};

export default App;
