import React, { useContext, useEffect } from "react";
import { DataContext } from "../logic/context";
import { db } from "../firebase";
import { onSnapshot, collection } from "firebase/firestore";

const Messages = () => {
  const { messages, setMessages, activeChannel } = useContext(DataContext);
  const colRef = collection(db, "channels", activeChannel, "messages");

  function checkMessage(sent) {
    const test = sent.message.message.includes(
      "jpg",
      "jpeg",
      "png",
      "webp",
      "avif",
      "gif",
      "svg"
    );

    if (test === true) {
      return (
        <img className="message__messageImage" src={sent.message.message}></img>
      );
    } else if (
      (test === false) &
      (sent.message.message.includes("http") === true)
    ) {
      return (
        <a className="message__message" href={sent.message.message}>
          {sent.message.message}
        </a>
      );
    } else return <p className="message__message">{sent.message.message}</p>;
  }

  const customSortMessages = (a, b) => {
    const dateA = new Date(a.message.timeSent);
    const dateB = new Date(b.message.timeSent);

    if (dateA > dateB) return 1;
    else if (dateA < dateB) return -1;
    return 0;
  };

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, [activeChannel]);

  messages.sort(customSortMessages);

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
              {checkMessage(sent)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
