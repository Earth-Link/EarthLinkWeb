import React from "react";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import JsxParser from "react-jsx-parser";
import {
  updateScore,
  reloadUser,
  setWaitErrorTrue,
  setWaitErrorFalse,
  resetTime,
} from "../../userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function RewardButton(props) {
  // console.log(props, "reward props");
  const Icon = props.logo;
  const dispatch = useDispatch();

  const { time } = useSelector((state) => state.user);

  const updateScoreDB = async (score, email) => {
    console.log("updating score");
    dispatch(setWaitErrorFalse());
    const currTime = new Date();
    if (currTime.getTime() - time > 1000) {
      dispatch(resetTime());
      console.log("It's been more than 5 seconds");
      try {
        console.log(props.props.props.email)
        const response = await axios.post("http://localhost:3000/user/updatescore", {
          data: {
            email: props.props.props.email,
            score: score,
          },
        });
        console.log(response.data);
        dispatch(reloadUser());
      } catch (error) {
        console.log("Won't update the score because of an error...");
        console.error(error);
      }
    } else {
      console.log("Less than 5 seconds error!");
      dispatch(setWaitErrorTrue());
      dispatch(resetTime());
    }
  };

  return (
    <button
      className="RewardButton"
      onClick={() => updateScoreDB(props.score, props.props.email)}
    >
      <Icon className="RewardIcon"></Icon>
    </button>
  );
}

export default RewardButton;
