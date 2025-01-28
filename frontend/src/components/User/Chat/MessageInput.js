import React, { useState } from 'react';
import axios from 'axios';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        if (message.trim() === '') return; // Prevent sending empty messages

        try {
            const response = await axios.post('http://localhost:5000/api/messages/send', { message });
            console.log('Message sent successfully:', response.data);
            setMessage(''); // Clear the input after sending
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;
