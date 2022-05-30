import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className="profileCard">
      <div className="profileImg">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="profileName">
        <span>Risa Tnasinpaibool</span>
        <span>Front-End Developer </span>
      </div>

      <div className="followStatus">
        <hr />

        <div className="">
          <div className="follow">
            <span>6,890</span>
            <span>following</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>1</span>
            <span>followers</span>
          </div>

          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Post</span>
              </div>
            </>
          )}
        </div>

        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
