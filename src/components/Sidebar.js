import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import "../styles/sass/home.scss";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";

const Sidebar = () => {
  const colRef = collection(db, "channels");
  const [channels, setChannels] = useState([]);

  let channelName = "";
  const addChannel = () => {
    channelName = prompt("Enter a Channel name");
    if ((channelName !== null) & (channelName !== "")) {
      addDoc(colRef, {
        channelName,
      });
    } else alert("You must enter a name to create a Channel");
  };

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setChannels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div id='sidebar'>
      <div className='sidebar__header-container'>
        <h1 className='sidebar__header'>Maxcord</h1>
      </div>

      <div className='addChannel'>
        <h3 className='addChannel__text'>Add Channel</h3>
        <AddIcon className='addChannel__add' onClick={addChannel} />
      </div>

      <div className='channels'>
        {channels.map((channel, id) => (
          <span className='channels__channel' key={id}>
            <span className='channels__icon'>
              <ChatIcon />
            </span>
            <span className='channels__name'>{channel.channelName}</span>
          </span>
        ))}
      </div>

      <div className='user-container'></div>
    </div>
  );
};

export default Sidebar;
