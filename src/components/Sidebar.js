import React, { useEffect, useState, useContext } from "react";
import "../styles/sass/home.scss";
import { db } from "../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { LoginContext } from "../logic/context";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const colRef = collection(db, "channels");
  const [channels, setChannels] = useState([]);
  const { user, setUser, setActiveChannel } = useContext(LoginContext);

  const signOutUser = () => {
    setUser(undefined);
  };

  const clickedChannel = (e) => {
    setActiveChannel(e.target.innerHTML);
  };

  const addChannel = () => {
    let channelName = prompt("Enter a Channel name less than 20 characters");
    if (
      (channelName !== null) &
      (channelName !== "") &
      (channelName.length <= 20)
    ) {
      addDoc(colRef, {
        channelName,
      });
    } else alert("You must enter a valid Channel name");
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

      <div className='channels__container'>
        <div className='channels'>
          {channels.map((channel, id) => (
            <span className='channels__channel' key={id}>
              <span className='channels__icon'>
                <ChatIcon />
              </span>
              <span className='channels__name' onClick={clickedChannel}>
                {channel.channelName}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className='user__container'>
        <div className='user__container-info'>
          <img
            className='user__image'
            src={user.image}
            alt='logged in user'
            onClick={signOutUser}
          />
          <div className='user__container-col'>
            <span className='user__name'>{user.name}</span>
            <span className='user__id'>#{user.id}</span>
          </div>
          <div className='logout__container' onClick={signOutUser}>
            <LogoutIcon className='logout__icon'></LogoutIcon>
            <span className='logout__text'>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
