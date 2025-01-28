import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import chatService from '../../../services/chatService';

// Make sure the URL points to the correct backend address
// const socket = io('http://localhost:5000');

const ChatWindow = ({ senderId, receiverId }) => {
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     // Fetch existing messages from the server
    //     chatService.getMessages(senderId, receiverId).then((data) => {
    //         setMessages(data);
    //     });

    //     // Listen for new messages from the backend
    //     socket.on('receive_message', (newMessage) => {
    //         setMessages((prevMessages) => [...prevMessages, newMessage]);
    //     });

    //     return () => {
    //     // Cleanup the event listener when the component unmounts
    //     socket.off('receive_message');
    //     };
    // }, [senderId, receiverId]);

    // const handleSendMessage = (content) => {
    //     const message = { sender_id: senderId, receiver_id: receiverId, content };

    //     // Emit message to the backend via Socket.IO
    //     socket.emit('send_message', message);

    //     // Save the message in the backend database
    //     chatService.sendMessage(message);

    //     // Update UI with the new message
    //     setMessages((prevMessages) => [...prevMessages, message]);
    // };

    return (
        <div className="chat-window">
            {/* <MessageList messages={messages} /> */}
            {/* <MessageInput onSend={handleSendMessage} /> */}
        </div>
    );
};

export default ChatWindow;