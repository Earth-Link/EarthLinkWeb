import React from "react";
import HomePageHeaderNav from "./HomePageHeaderNav";
import { useEffect } from "react";
import {useSelector} from 'react-redux';
import axios from "axios";

function HomePageHeader(props) {

  const {reload, score} = useSelector((state) => state.user);

  const getScore = async (username) => {
    try {
        const response = await axios.get("http://localhost:3000/updatescore", {
            data: {
              userName : username,
            },
        });
        console.log(response.data);
        dispatch(updateScore(responseData));
    } catch (error) {
        console.error(error);
    }
  }

  //uncomment when connected
  useEffect(() => {
    getScore("Hi, Jenny");
  }, [reload]);
  return (
    <div className="HomePageHeader">
      <HomePageHeaderNav props={props.props}></HomePageHeaderNav>
      <div>Your total Eco Score is: {score}.</div>
    </div>
  );
}

export default HomePageHeader;
