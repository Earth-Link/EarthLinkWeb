import React from "react";
import HomePageHeaderNav from "./HomePageHeaderNav";

function HomePageHeader(props) {
  return (
    <div className="HomePageHeader">
      <HomePageHeaderNav props={props.props}></HomePageHeaderNav>
      <div>Did you know you can save energy by doing this...</div>
    </div>
  );
}

export default HomePageHeader;
