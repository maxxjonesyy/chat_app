import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div id="home">
      <Sidebar />
      <Header />
      <Chat />
    </div>
  );
};

export default Home;
