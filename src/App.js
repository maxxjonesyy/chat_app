import React, { useState } from "react";
import { DataContext } from "./logic/context";
import Login from "./pages/Login";
import Home from "./pages/Home";
import documentHeight from "./logic/document";
import "./styles/sass/app.scss";

const App = () => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localUser);
  const [channels, setChannels] = useState([]);
  const [activeChannel, setActiveChannel] = useState("Wade Lane");
  const [messages, setMessages] = useState([]);

  documentHeight();
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
      {!localUser || !user ? <Login /> : <Home />}
    </DataContext.Provider>
  );
};

export default App;
