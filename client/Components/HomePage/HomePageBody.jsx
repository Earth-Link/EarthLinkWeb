import React from "react";
import HomePageButtonsContainer from "./HomePageButtonsContainer";
import {useSelector} from 'react-redux';

function HomePageBody() {
  const {waitError} = useSelector((state) => state.user);

  return (
    <div className="HomePageBody">
      <div>
        Practice eco-friendly behavior by doing the actions below. 
      </div>
      <div>
        {waitError && <p className="waitError">Please wait 5 seconds before adding to your score again.</p>}
      </div>
      <HomePageButtonsContainer></HomePageButtonsContainer>
    </div>
  );
}

export default HomePageBody;
