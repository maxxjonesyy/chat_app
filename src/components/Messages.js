import React, { useContext, useEffect } from "react";
import { DataContext } from "../logic/context";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

const Messages = () => {
  const { messages, setMessages, activeChannel } = useContext(DataContext);
  const colRef = collection(db, "channels", activeChannel, "messages");

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [activeChannel]);

  return (
    <div id="messages">
      {messages.map((sent, id) => {
        return (
          <div className="message__info" key={id}>
            <img
              className="message__image"
              src={sent.message.image}
              alt="user that sent current message"
            ></img>
            <div className="message__info-vertical">
              <span className="message__name">{sent.message.name}</span>
              <span className="message__date">{sent.message.timeSent}</span>
              <p className="message__message">{sent.message.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
