import { UserButton, UserProfile } from "@clerk/clerk-react";
import React from "react";

const User = () => {
  return (
    <div>
      this is user
      <UserButton />
      <UserProfile/>
    </div>
  );
};

export default User;
