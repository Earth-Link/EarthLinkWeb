import React from "react";
import HomePageHeaderNav from "./HomePageHeaderNav";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { updateScore } from "../../userSlice/userSlice";
import axios from "axios";

function HomePageHeader(props) {
  const dispatch = useDispatch();
  const {reload, score, waitError} = useSelector((state) => state.user);

  const getScore = async (email) => {
    try {
        const url = `http://localhost:3000/user/getScore/${email}`;
        console.log("URL: ", url);
        const response = await axios.get(url);
        console.log(response.data.totalScore.points);
        dispatch(updateScore(response.data.totalScore.points));
    } catch (error) {
        console.error(error);
    }
  }

  //pass in 
  //uncomment when connected
  useEffect(() => {
    getScore(props.props.email);
  }, [reload]);
  return (
    <div className="HomePageHeader">
      <HomePageHeaderNav props={props.props}></HomePageHeaderNav>
      <div className="scoreDisplay">
        Carbon saved: <span id="score">{score}</span> grams{waitError && <span className="waitError">Please wait a second before adding to your score again.</span>}
      </div>
    </div>
  );
}

export default HomePageHeader;
