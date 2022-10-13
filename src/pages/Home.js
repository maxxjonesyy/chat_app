import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div id='home'>
      <Sidebar />
      <div className='home__flex-vertical'>
        <Header />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
