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

        <div className="help__container">
          <div className="help">
            <HelpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
