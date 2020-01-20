import React, { useState } from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  return (
    <form className="input-form">
      <input
        className="input"
        placeholder="Enter a message..."
        onChange={event => setMessage(event.target.value)}
        value={message}
        onKeyPress={event => {
          event.key === 'Enter' && sendMessage(event);
        }}
      />
      <div
        className="send-button"
        onClick={event => {
          sendMessage(event);
        }}
      >
        <img src="https://img.icons8.com/ios/100/000000/send-letter--v2.png" />
      </div>
    </form>
  );
};

export default Input;
