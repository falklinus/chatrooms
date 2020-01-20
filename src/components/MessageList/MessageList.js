import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';

import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <ScrollToBottom className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </ScrollToBottom>
  );
};

export default MessageList;
