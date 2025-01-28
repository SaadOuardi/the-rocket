import React, { useState, useEffect } from 'react';
import { Conversation } from '../../../Messages/Conversation/Conversation';
import NoMessage from '../../../../../assets/images/design/no-message.png';
import './Message.scss';

export const MessageBtn = ({ userId }) => {
    const [messages, setMessages] = useState([]);
    const [messageVisibility, setMessageVisibility] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleMessage = (event) => {
        const clickedId = event.target.id;
        if (clickedId === 'chat') {
            setMessageVisibility(!messageVisibility);
        } else {
            setMessageVisibility(false);
        }
    };
    const handleConversation = (friendId) => {
        setSelectedFriend(friendId);
    };

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5000/api/messages/last-messages?userId=${userId}`);
    //             const data = await response.json();
    //             setMessages(data);
    //         } catch (error) {
    //             console.error(`Error fetching messages: ${error}`);
    //         }
    //     };
    //     fetchMessages();
    // }, [userId]);
    
    window.addEventListener('click', handleMessage);

    return (
        <>
            <div className='Messages'>
                <div className='Message__container'>
                    <div className='main-icon'>
                        <div className='Icon-Bg' title='Messages' id='chat'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id='chat'><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
                        </div>
                        <div className='notification-icon'>
                            <span>9</span>
                        </div>
                    </div>

                    {messageVisibility &&
                        <div className='container'>
                            {!messages ?(
                                <>
                                    <div className='Header'>
                                        <h1>Chats</h1>
                                    </div>
                                    <div className='Search'>
                                        <input type="search" placeholder='Search for Message' />
                                    </div>
                                    {/* <div className='Messages_List'>
                                        {messages.map((message) => {
                                            const isSender = message.sender_id === userId;
                                            return (
                                                <Message
                                                    key={message.id}
                                                    FromImage={isSender ? message.receiver_profile_picture : message.sender_profile_picture}
                                                    FromName={isSender ? message.receiver_username : message.sender_username}
                                                    MessageFrom={message.sender_username}
                                                    Message={message.content}
                                                    Time={new Date(message.created_at).toLocaleString()}
                                                    onClick={() => handleConversation(isSender ? message.receiver_id : message.sender_id)}
                                                />
                                            );
                                        })}
                                    </div> */}
                                    <a href="/messages">
                                        <div className='Flex-Center'>
                                            <button>See all in Messages</button>
                                        </div>
                                    </a>
                                </>
                                ):(
                                    <div className='Flex-Center Flex-Column'>
                                        <div className='Flex-Center'>
                                            <img src={NoMessage} alt="" />
                                        </div>
                                        <h1>No Messages, yet.</h1>
                                        <p style={{textAlign:'center'}}>No messages in your inbox, yet! Start chatting with people around you.</p>
                                        <a href="/messages">
                                            <button>Create New</button>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
            </div>

            {selectedFriend && <Conversation friendId={selectedFriend} userId={userId} />}
        </>
    );
}

export const Message = ({ FromImage, FromName, MessageFrom, Message, Time, onClick }) => {
    return (
        <div className='Message' onClick={onClick}>
            <div className='Message__container Flex-Center'>
                <div className='UserProfile Flex-Center'>
                    <img src={FromImage} alt="" />
                </div>

                <div className='UserData Flex-Center'>
                    <h1>{FromName}</h1>
                    <p>
                        <span>{MessageFrom}:</span>
                        <span> {Message}</span>
                        <span>.{Time}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}