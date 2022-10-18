import React, { useContext } from "react";
import { DataContext } from "../logic/context";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";

const Header = () => {
  const { activeChannel } = useContext(DataContext);

  return (
    <div id="header">
      <div className="header__container">
        <span className="active-channel">
          <span className="active-channel__icon">
            <ChatIcon />
          </span>
          <span className="active-channel__name">{activeChannel}</span>
        </span>

        <div className="search-help__container">
          <input
            className="search-help__search"
            type="text"
            placeholder="Search"
          />
          <div className="search-help__help">
            <HelpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
