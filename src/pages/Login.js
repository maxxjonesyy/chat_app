/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { LoginContext } from "../logic/context";
import { auth, provider, signInWithPopup } from "../firebase";

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
    <div>
      <button onClick={googleSignIn}>Login</button>
    </div>
  );
};

export default Login;
