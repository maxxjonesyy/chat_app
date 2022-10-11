import React, { useContext } from "react";
import { LoginContext } from "../logic/context";
import { auth, provider, signInWithPopup } from "../firebase";
import "../styles/sass/login.scss";
import Button from "@mui/material/Button";

const Login = () => {
  const { setUser } = useContext(LoginContext);

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
    <div id='login'>
      <Button className='login-btn' variant='contained' onClick={googleSignIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
