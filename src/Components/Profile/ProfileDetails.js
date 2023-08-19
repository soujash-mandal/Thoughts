import { useUser } from "@clerk/clerk-react";
import React from "react";

const ProfileDetails = () => {
  const { user } = useUser();
  console.log(user.setProfileImage);
  return (
    <div className="profile_container">
      <div className="profile_image">
        <img
          src={user.imageUrl}
          height={150}
          width={150}
          className="thought_profile"
        ></img>
      </div>
      <div className="profile_info">
        <div>
          <h2>{user.fullName}</h2>
        </div>
        <div>
          <p>{user.primaryEmailAddress.emailAddress}</p>
        </div>
        <div>
          <p>last Logged In</p>
          <p>{user.lastSignInAt.toString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
