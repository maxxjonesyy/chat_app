import React, { useState } from "react";
import { LoginContext } from "./logic/context";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const [user, setUser] = useState();

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {user !== undefined ? <Home /> : <Login />}
    </LoginContext.Provider>
  );
};

export default App;
