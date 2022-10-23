import React, { useContext } from "react";
import { DataContext } from "../logic/context";
import { auth, provider, signInWithPopup } from "../firebase";
import "../styles/sass/login.scss";
import Button from "@mui/material/Button";

const Login = () => {
  const { setUser } = useContext(DataContext);

  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((response) =>
      setUser({
        name: response.user.displayName,
        email: response.user.email,
        image: response.user.photoURL,
        id: response.user.uid.slice(-4),
      })
    );
  };

  return (
    <div id="login">
      <div className="context">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <h1>Maxcord</h1>
      <Button className="login-btn" variant="contained" onClick={googleSignIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
