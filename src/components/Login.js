import React from "react";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = ({ setUser }) => {
  const signin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="logo">
      <img
        src="https://i.vimeocdn.com/video/1345052044-eb6ed2ec9a7fbdac1a7ce4de086b4d0a624e8db7ae8d811fbd949e8a0c9f2de6-d_640x360.jpg"
        alt="picture"
      />
      <Button onClick={signin}>Signin</Button>
    </div>
  );
};

export default Login;
