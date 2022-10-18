import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Messages from "../components/Messages";

const Home = () => {
  return (
    <div id="home">
      <Sidebar />
      <div className="home__flex-vertical">
        <Header />
        <Messages />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
