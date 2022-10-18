import React, { useState } from "react";
import { DataContext } from "./logic/context";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles/sass/app.scss";

const App = () => {
  const [user, setUser] = useState();
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState("Wade Lane");
  const [messages, setMessages] = useState([]);

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        channels,
        setChannels,
        activeChannel,
        setActiveChannel,
        messages,
        setMessages,
      }}
    >
      {user !== undefined ? <Home /> : <Login />}
    </DataContext.Provider>
  );
};

export default App;
