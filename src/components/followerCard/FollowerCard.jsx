import React from "react";
import "./FollowerCard.css";
import { Followers } from "../../data/FollowerData";

const FollowerCard = () => {
  return (
    <div className="followerCard">
      <h3>Who is following you</h3>

      {Followers.map((followers, id) => {
        return (
          <div className="followers" key={id}>
            <div>
              <img
                src={followers.img}
                alt={followers.img}
                className="followerImg"
              />
              <div className="name">
                <span>{followers.name}</span>
                <span>@{followers.username}</span>
              </div>
            </div>

            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerCard;
