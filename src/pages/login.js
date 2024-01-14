import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/login.scss";
import Swooshlogo from "../images/swooshlogo(1).png";
import Nikeintro from "../Video/Nike intro.mp4";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-section">
      <div className="left-section">
        <ReactPlayer
          url={Nikeintro}
          playing={true}
          controls={false}
          loop={true}
          muted={true}
          playsinline={true}
          onReady={onLoadedData}
          className="Nike-intro"
        />
      </div>
      <div className="right-section">
        <div className="right-container">
          <div>
            <Typography variant="h5" className="heading">
              Welcome Back!
            </Typography>
            <Typography variant="caption" color="gray">
              Please Enter Your Details
            </Typography>
          </div>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="input-box"
            >
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </Box>
            <Typography variant="caption" color="gray">
              Forgot Password?
            </Typography>
            <Button variant="contained" className="signup-button" onClick={login}>
              Login
            </Button>
          </div>
          <div className="image-container">
            <img src={Swooshlogo} alt="Swooshlogo" className="swooshlogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
