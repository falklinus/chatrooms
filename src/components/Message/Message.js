import React from 'react';

import './Message.css';

const Message = ({ message }) => {
  const { senderId, text } = message;

  const sentByCurrentUser = senderId === 'linus';

  if (sentByCurrentUser) {
    return (
      <div className="outer-container outer-container-right">
        <p className="message-sender">{senderId}</p>
        <div className="message-container orange">
          <p className="message-text">{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="outer-container outer-container-left">
        <p className="message-sender">{senderId}</p>
        <div className="message-container">
          <p className="message-text">{text}</p>
        </div>
      </div>
    );
  }
};

export default Message;
