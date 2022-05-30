import React from "react";
import Logosearch from "../logoSearch/Logosearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <Logosearch />
      <ProfileCard />
    </div>
  );
};

export default ProfileSide;
