import React from "react";
import HomePageButtonsContainer from "./HomePageButtonsContainer";
import {useSelector} from 'react-redux';

function HomePageBody(props) {

  return (
    <div className="HomePageBody">
      <div>
        Practice eco-friendly behavior by doing the actions below. 
      </div>
      <HomePageButtonsContainer props={props}></HomePageButtonsContainer>
    </div>
  );
}

export default HomePageBody;
