import React from "react";
import RewardButton from "./RewardButton";
import { IoIosSubway } from "react-icons/Io";
import { MdDirectionsBike } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { BsLightbulbOff } from "react-icons/bs";
import { GiWaterRecycling } from "react-icons/gi";

function HomePageButtonsContainer() {
  console.log("Container");

  // ;)
  const buttInfo = [
    {
      logo : BsLightbulbOff,
      actionID : "action4",
      information : "info!",
      score: 1,
    },
    {
      logo : FaWalking,
      actionID : "action3",
      information : "info!",
      score: 10,
    },
    {
      logo : GiWaterRecycling,
      actionID : "action5",
      information : "info!",
      score: 5,
    },
    {
      logo : MdDirectionsBike,
      actionID : "action2",
      information : "info!",
      score: 20,
    },
    { 
      logo : IoIosSubway,
      actionID : "action1",
      information : "info!",
      score: 7,
    },
  ];

  const buttons = buttInfo.map((button,idx) => 
    <RewardButton 
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
