import React from "react";
import HomePageButtonsContainer from "./HomePageButtonsContainer";
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function HomePageBody(props) {
console.log(props)
  return (
    <div className="HomePageBody">
      <div className="buttonHeader">
        Practice eco-friendly behavior by doing the actions below. 
      </div>
      <HomePageButtonsContainer props={props}></HomePageButtonsContainer>
      <Link to='/profile' state={props}>Go To Your Profile</Link>
    </div>
  );
}

export default HomePageBody;
