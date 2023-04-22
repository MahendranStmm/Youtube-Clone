import React from "react";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  MusicNote,
  Sports,
  Games,
  FileCopy,
  Newspaper,
  Living,
} from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="box">
        <div className="icon1">
          <Home />
          <p>Home</p>
        </div>
        <div className="icons">
          <Explore />
          <p>Explore</p>
        </div>
        <div className="icons">
          <Subscriptions />
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="box">
        <div className="icons">
          <VideoLibrary />
          <p>Library</p>
        </div>
        <div className="icons">
          <History />
          <p>History</p>
        </div>
      </div>
      <div className="box">
        <div className="icons">
          <MusicNote />
          <p>Music</p>
        </div>
        <div className="icons">
          <Sports />
          <p>Sports</p>
        </div>
        <div className="icons">
          <Games />
          <p>Games</p>
        </div>
        <div className="icons">
          <FileCopy />
          <p>Film</p>
        </div>
        <div className="icons">
          <Newspaper />
          <p>News</p>
        </div>
        <div className="icons">
          <Living />
          <p>Live</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
