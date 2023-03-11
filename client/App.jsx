import React from 'react';
import LSContainer from './Components/LoginSignup/LSContainer';

const App = () => {
  //THIS IS A FUNCTION JUST FOR TESTING IF THE BACKEND AND FRONTEND IS CONNECTED
  const onclick = () => {
    fetch("/test").then(console.log("testing"));
  };
  return (
    <React.Fragment>
      <LSContainer />
    </React.Fragment>
  );
};

export default App;
