import React, { useState } from "react";
import { LoginContext } from "./logic/context";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles/sass/app.scss";

const App = () => {
  const [user, setUser] = useState();
  const [activeChannel, setActiveChannel] = useState();

  return (
    <LoginContext.Provider
      value={{ user, setUser, activeChannel, setActiveChannel }}
    >
      {user !== undefined ? <Home /> : <Login />}
    </LoginContext.Provider>
  );
};

export default App;
