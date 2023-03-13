import React from "react";
import { useLocation } from "react-router-dom";
import {useSelector} from 'react-redux';

const Profile = () => {
    const location = useLocation();
    console.log(location.state);
    const {firstname, lastname} = location.state.props;
    const {score} = useSelector((state) => state.user);
    const treesPlanted = (score / 25000) * 10;
  return (
    <React.Fragment>
      <h1 className="profileName">Hi, {firstname + ' ' + lastname}!</h1>
      <h2 className="tree">Your efforts of saving carbon emmissions are equivalent to {treesPlanted.toFixed(2)} trees planted🌲</h2>
    </React.Fragment>
  );
};

export default Profile;
