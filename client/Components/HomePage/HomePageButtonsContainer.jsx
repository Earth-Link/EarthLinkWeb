import React from "react";
import RewardButton from "./RewardButton";
import { IoIosSubway } from "react-icons/Io";
import { MdDirectionsBike } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { BsLightbulbOff } from "react-icons/bs";
import { GiWaterRecycling } from "react-icons/gi";

function HomePageButtonsContainer(props) {
  console.log("Container");

  // ;)
  const buttInfo = [
    {
      logo : BsLightbulbOff,
      actionID : "action4",
      information : "Turn lights off",
      score: 20,
    },
    {
      logo : FaWalking,
      actionID : "action3",
      information : "Walk",
      score: 350,
    },
    {
      logo : GiWaterRecycling,
      actionID : "action5",
      information : "Reuse bottle",
      score: 56,
    },
    {
      logo : MdDirectionsBike,
      actionID : "action2",
      information : "Ride a bike",
      score: 350,
    },
    { 
      logo : IoIosSubway,
      actionID : "action1",
      information : "Take subway",
      score: 115,
    },
  ];

  const buttons = buttInfo.map((button,idx) => 
    <RewardButton 
    props={props.props}
    key={idx}
    logo={button.logo} 
    actionID={button.actionID}
    information={button.information}
    score={button.score}
    ></RewardButton>
  );

  return <div className="HomePageButtonsContainer">{buttons}</div>;
}

export default HomePageButtonsContainer;
