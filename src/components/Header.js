import React, { useContext } from "react";
import { DataContext } from "../logic/context";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";

const Header = () => {
  const { activeChannel, channels } = useContext(DataContext);

  const handleRulesPopup = () => {
    const channelHelpModal = document.querySelector(".channel-help__modal");
    channelHelpModal.classList.contains("hide")
      ? channelHelpModal.classList.remove("hide")
      : channelHelpModal.classList.add("hide");
  };

  return (
    <div id="header">
      <div className="header__container">
        <span className="active-channel">
          <span className="active-channel__icon">
            <ChatIcon />
          </span>
          <span className="active-channel__name">{activeChannel}</span>
        </span>

        <div className="channel-help__container">
          <div className="channel-help__icon" onClick={handleRulesPopup}>
            <HelpIcon />
          </div>
          <div className="channel-help__modal hide">
            {channels.map((channel, id) => {
              if (channel.channelName === activeChannel)
                return (
                  <div className="channel-help__info" key={id}>
                    <span>
                      Current channel: <br />
                      <span className="channel-help__data">
                        {activeChannel}
                      </span>
                    </span>
                    <br />
                    <span>
                      Created by: <br />
                      <span className="channel-help__data">
                        {channel.createdBy}
                      </span>
                    </span>
                    <br />
                    <span>
                      Created date: <br />
                      <span className="channel-help__data">
                        {channel.createdDate}
                      </span>
                    </span>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
