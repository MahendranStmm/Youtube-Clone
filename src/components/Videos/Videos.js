import React from "react";
import "./Videos.css";
import { Avatar } from "@mui/material";

const Videos = ({ Image, Avatarsrc, Title, Views, Days, link }) => {
  return (
    <div className="thumbnail">
      <a href={link} className="link">
        <img src={Image} className="images" />
        <div className="details">
          <Avatar src={Avatarsrc} />
          <p>{Title}</p>
        </div>
        <div className="days">
          <h5>{Views}</h5>
          <h5>{Days}</h5>
        </div>
      </a>
    </div>
  );
};

export default Videos;
