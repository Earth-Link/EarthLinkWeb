import React from "react";

const App = () => {
    //THIS IS A FUNCTION JUST FOR TESTING IF THE BACKEND AND FRONTEND IS CONNECTED
  const onclick = () => {
    fetch("/test").then(console.log("testing"));
  };
  return (
    <React.Fragment>
      <App/>
    </React.Fragment>
  );
};

export default App;
