import React from "react";

const App = () => {
  //THIS IS A FUNCTION JUST FOR TESTING IF THE BACKEND AND FRONTEND IS CONNECTED
  const onclick = () => {
    fetch("/test").then(console.log("testing"));
  };
  return (
    <React.Fragment>
      <h2>Hello!</h2>
      <button onClick={onclick}>test frontend and backend connection</button>
    </React.Fragment>
  );
};

export default App;
