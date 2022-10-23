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

  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };

  window.addEventListener("resize", documentHeight);

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
