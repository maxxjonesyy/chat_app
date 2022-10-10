import React from "react";
import "../styles/sass/home.scss";
import AddIcon from "@mui/icons-material/Add";

const sidebar = () => {
  const addChannel = () => {
    const channel = prompt("Enter a Channel name");
  };

  return (
    <div id="sidebar">
      <div className="sidebar__header-container">
        <span className="sidebar__header">Channels</span>
        <div className="sidebar__add-channel" onClick={addChannel}>
          <AddIcon />
        </div>
      </div>

      <div className="sidebar__channels">
        <span className="sidebar__channel">
          <span className="sidebar__hash">#</span>
          Channel
        </span>
      </div>
    </div>
  );
};

export default sidebar;
