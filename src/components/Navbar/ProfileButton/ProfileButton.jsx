import React from "react";
import User from "../../../img/user.jpg";

const ProfileButton = () => {
  return (
    <div>
      <img src={User} alt="user" className="profile-button__photo" />
      <span className="profile-button__user-name">Jonas</span>
    </div>
  );
};

export default ProfileButton;
