import React from 'react';
import {FiX} from 'react-icons/fi';
import { IconContext } from 'react-icons';
import JsxParser from 'react-jsx-parser';
import {updateScore, reloadUser, setWaitErrorTrue, setWaitErrorFalse, resetTime} from '../../userSlice/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";

function RewardButton(props) {
  const Icon = props.logo;
  const dispatch = useDispatch();

  const {time} = useSelector((state) => state.user);
  

  const updateScoreDB = async (score) => {
    console.log("updating score");
    dispatch(setWaitErrorFalse());
    const currTime = new Date();
    if((currTime.getTime() - time) > 5000) {
      dispatch(resetTime());
      console.log("It's been more than 5 seconds");
      try {
        const response = await axios.post("http://localhost:3000/updatescore", {
            data: {
              userName : "Hi, Jenny",
              score : score
            },
        });
        console.log(response.data);
        dispatch(reloadUser());
      } catch (error) {
          console.error(error);
      }
    } else {
      console.log("Less than 5 seconds error!");
      dispatch(setWaitErrorTrue());
      dispatch(resetTime());
    } 
  }

  return (
    <button className="RewardButton" onClick={() => updateScoreDB(props.score)}>
        <Icon className="RewardIcon"></Icon>
    </button>
  );
}

export default RewardButton;
