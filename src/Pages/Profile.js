import React from "react";
import ProfileDetails from "../Components/Profile/ProfileDetails";
import ProfileThoughts from "../Components/Profile/ProfileThoughts";

const Profile = () => {
  return (
    <div className="main flex">
      <ProfileDetails />
      <div className="profile_left"></div>
      <ProfileThoughts />
    </div>
  );
};

export default Profile;
