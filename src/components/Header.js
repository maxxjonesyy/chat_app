import React, { useContext } from "react";
import { LoginContext } from "../logic/context";

const Header = () => {
  const { activeChannel } = useContext(LoginContext);

  return (
    <div id='header'>
      <div className='header__container'>
        <span className='header__active-channel'>#{activeChannel}</span>
      </div>
    </div>
  );
};

export default Header;
