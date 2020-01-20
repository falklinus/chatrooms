import React, { useState } from 'react';

import MessageList from '../MessageList/MessageList';
import Input from '../Input/Input';

import './Chat.css';

let DUMMY_DATA = [
  {
    senderId: 'linus',
    text: 'Heeeej! Hur mår du?'
  },
  {
    senderId: 'julia',
    text: 'Braaa. Osså du?'
  },
  {
    senderId: 'linus',
    text: 'jaa mår blaa'
  }
];

const Chat = () => {
  const [messages, setMessages] = useState(DUMMY_DATA);
  const [message, setMessage] = useState('');

  const sendMessage = event => {
    event.preventDefault();
    if (message === '') return;
    setMessages([...messages, { senderId: 'linus', text: message }]);
    setMessage('');
  };

  return (
    <div className="container">
      <p>Ny Chatt</p>
      <MessageList messages={messages} />
      <Input
        setMessage={setMessage}
        sendMessage={sendMessage}
        message={message}
      />
    </div>
  );
};

export default Chat;
