import React from "react";
import HomePageBody from "./HomePageBody";
import HomePageHeader from "./HomePageHeader";
import { useLocation } from "react-router-dom";

function HomePageContainer() {
  const location = useLocation();

  return (
    <div className="HomePageContainer">
      <HomePageHeader props={location.state}></HomePageHeader>
      <hr />
      <HomePageBody props={location.state}></HomePageBody>
    </div>
  );
}

export default HomePageContainer;
