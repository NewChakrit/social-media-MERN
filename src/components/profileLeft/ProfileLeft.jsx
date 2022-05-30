import React from "react";
import LogoSearch from "../logoSearch/Logosearch";
import FollowerCard from "../followerCard/FollowerCard";
import InfoCard from "../infoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="profileLeft profileSide">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
