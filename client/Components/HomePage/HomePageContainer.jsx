import React from "react";
import HomePageBody from "./HomePageBody";
import HomePageHeader from "./HomePageHeader";

function HomePageContainer() {
  console.log("Container");

  return (
    <div className="HomePageContainer">
      <HomePageHeader></HomePageHeader>
      <hr />
      <HomePageBody></HomePageBody>
    </div>
  );
}

export default HomePageContainer;