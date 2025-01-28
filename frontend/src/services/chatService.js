// services/chatService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/messages';  // Backend URL

const sendMessage = async (senderId, receiverId, message) => {
    try {
        const response = await axios.post('http://localhost:5000/api/messages/send', {
            sender_id: senderId,
            receiver_id: receiverId,
            content: message,
        });
        console.log('Message sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};


const getMessages = async (senderId, receiverId) => {
    try {
        const response = await axios.get(`${API_URL}/${senderId}/${receiverId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};

export default { sendMessage, getMessages };