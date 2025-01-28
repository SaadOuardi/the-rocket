import ChatWindow from '../../../components/User/Chat/ChatWindow';
import React from 'react'

const Chats = () => {
    const senderId = 1;
    const receiverId = 2;

    return (
        <main>
            <ChatWindow senderId={senderId} receiverId={receiverId} />
        </main>
    )
}

export default Chats
