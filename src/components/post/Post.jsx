import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import Notlike from "../../img/notlike.png";

const Post = ({ data, id }) => {
  return (
    <div className="post">
      <img src={data.img} alt={id} />

      <div className="postReact">
        <img src={data.liked ? Heart : Notlike} alt="" />
        <img src={Comment} alt={id} />
        <img src={Share} alt={id} />
      </div>

      <span style={{ color: "var(--gray", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
