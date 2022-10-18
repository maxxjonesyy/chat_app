import React, { useContext } from "react";
import { DataContext } from "../logic/context";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Chat = () => {
  const { user, activeChannel } = useContext(DataContext);

  const handleKeyDown = (e) => {
    let message = e.target.value;

    if ((e.key === "Enter") & (message !== "")) {
      addDoc(collection(db, "channels", activeChannel, "messages"), {
        message: {
          name: user.name,
          image: user.image,
          timeSent: new Date().toLocaleString("en-US", {
            timeZone: "Australia/Sydney",
          }),
          message: message,
        },
      }).then((e.target.value = ""));
    }
  };

  return (
    <div id="chat">
      <div className="chat__container">
        <input
          className="chat__input"
          type="text"
          placeholder="Message"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Chat;
