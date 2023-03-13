import React from "react";
import RewardButton from "./RewardButton";
import { IoIosSubway } from "react-icons/Io";
import { MdDirectionsBike } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { BsLightbulbOff } from "react-icons/bs";
import { GiWaterRecycling } from "react-icons/gi";

function HomePageButtonsContainer() {
  const logos = [
    {
      logo: BsLightbulbOff,
      actionID: "action4",
      information: "info!",
    },
    {
      logo: FaWalking,
      actionID: "action3",
      information: "info!",
    },
    {
      logo: GiWaterRecycling,
      actionID: "action5",
      information: "info!",
    },
    {
      logo: MdDirectionsBike,
      actionID: "action2",
      information: "info!",
    },
    {
      logo: IoIosSubway,
      actionID: "action1",
      information: "info!",
    },
  ];

  const buttons = logos.map((button, idx) => (
    <RewardButton
      key={idx}
      logo={button.logo}
      actionID={button.actionID}
      information={button.information}
    ></RewardButton>
  ));

  return <div className="HomePageButtonsContainer">{buttons}</div>;
}

export default HomePageButtonsContainer;
