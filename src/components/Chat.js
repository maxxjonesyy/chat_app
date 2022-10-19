import React, { useContext } from "react";
import { DataContext } from "../logic/context";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import EmojiPicker from "emoji-picker-react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Chat = () => {
  const { user, activeChannel } = useContext(DataContext);

  const handleEmojiPopup = () => {
    const popUp = document.querySelector(".emoji__container");
    popUp.classList.contains("hide")
      ? popUp.classList.remove("hide")
      : popUp.classList.add("hide");
  };

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
        <div className="emoji__container hide">
          <EmojiPicker
            theme="dark"
            onEmojiClick={(res) => {
              const chatInput = document.querySelector(".chat__input");
              chatInput.value = chatInput.value + `${res.emoji}`;
            }}
          />
        </div>
        <EmojiEmotionsIcon className="emoji__icon" onClick={handleEmojiPopup} />
      </div>
    </div>
  );
};

export default Chat;
