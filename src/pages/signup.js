import { Button, Typography } from "@mui/material";
import React from "react";
import Signupage from "../images/signuppage.jpg";
import "../styles/signup.scss";
import Google from "../images/google.png";
import Twitter from "../images/twitter.png";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
  }));
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user , setUser] = useState({});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-section">
      <img src={Signupage} alt="Signupage" className="signup-page" />
      <div className="signup-box">
        <div className="form-box">
          <Typography color="black" variant="h5" className="create-account">
            Create Account
          </Typography>
          <div className="button-container">
            <Button variant="outlined" size="medium" className="button">
              <img
                src={Google}
                alt="Google"
                width="25"
                height="25"
                style={{ marginRight: "5px" }}
              />
              Signup with Google
            </Button>
            <Button variant="outlined" size="medium" className="button">
              <img
                src={Twitter}
                alt="Twitter"
                width="15"
                height="15"
                style={{ marginRight: "6px" }}
              />
              Signup with Twitter
            </Button>
          </div>
          <Root>
            <Divider className="divider-container">OR</Divider>
          </Root>
          <div className="signup-textfield">
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="outlined"
              focused
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="outlined"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              focused
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="outlined"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
              focused
            />
          </div>
          <Button
            variant="outlined"
            size="medium"
            className="create-button"
            style={{ width: "50%", marginTop: "15px" }}
            onClick={register}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
