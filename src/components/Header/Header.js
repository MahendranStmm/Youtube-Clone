import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Search, Mic, Apps, MoreVert } from "@mui/icons-material";
import { Button, Avatar } from "@mui/material";

const Header = ({ user }) => {
  return (
    <div>
      <div className="header">
        <div className="header_left">
          <MenuIcon fontSize="medium" className="menu" />
          <img src="https://cdn.appuals.com/wp-content/uploads/2020/03/youtube_logo_dark.jpg" />
        </div>
        <div className="center">
          <div className="header_center">
            <input type="text" placeholder="search" />
            <Search fontSize="medium" className="search" />
          </div>
          <Mic className="mic" />
        </div>

        <div className="header_right">
          <Apps fontSize="medium" />
          <MoreVert fontSize="medium" />
          <Avatar src={user.PhotoURL} sx={{ width: 34, height: 34 }} />
          <Button variant="outlined">Signin</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
