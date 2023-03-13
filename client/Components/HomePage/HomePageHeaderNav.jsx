import React from "react";

function HomePageHeaderNav(props) {
  const { firstname, lastname, profile_picture } = props.props;

  return (
    <div className="HomePageHeaderNav">
      <p>Hello, {firstname + " " + lastname}!</p>
      <img id="default_image" src={profile_picture} />
    </div>
  );
}

export default HomePageHeaderNav;
