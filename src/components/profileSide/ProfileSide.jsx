import React from "react";
import Logosearch from "../logoSearch/Logosearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./ProfileSide.css";
import FollowerCard from "../followerCard/FollowerCard";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <Logosearch />
      <ProfileCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
