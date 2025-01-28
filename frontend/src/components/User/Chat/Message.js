// Message.js
import React from 'react';

const Message = ({ message }) => {
    return (
        <div className={`message ${message.sender_id === 1 ? 'sent' : 'received'}`}>
            <p>{message.content}</p>
        </div>
    );
};

export default Message;
