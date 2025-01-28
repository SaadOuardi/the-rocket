import React, {useState} from 'react';
import Profile2 from '../../../assets/images/profile/Ninja.jpg';
import Profile3 from '../../../assets/images/profile/Tfue.png';
import Profile1 from '../../../assets/images/profile/ElonMusk.webp';
import Profile4 from '../../../assets/images/profile/Fortnite.png';
import Profile5 from '../../../assets/images/profile/def.jpg';
import Profile6 from '../../../assets/images/profile/def.jpg';
import './Message.scss';

const Messages = () => {
    const [Message,setMessage] = useState(true);

    const handleMessage = () =>{
        let messageInput = document.getElementById('messageInput');
        if(messageInput.value===''){
            setMessage(true);
        }else{
            setMessage(false);
        }
    }
    return (
        <main>
            <div className='main-chat'>
                <div className='chat-leftside'>
                    <div className='chat-leftside-container'>
                        <div className='header title'>
                            <h1>Chats</h1>
                        </div>
                        <div className='body input-container'>
                            <input type='text' placeholder='Search or start a new chat'/>
                        </div>
                        <div className='footer chat-list'>
                            <ChatBar Profile={Profile1} Username='Elon Musk' Message='I love you <3' Time='1h'/>
                            <ChatBar Profile={Profile2} Username='Ninja' Message='Hi there!' Time='Yesterday'/>
                            <ChatBar Profile={Profile3} Username='FazeClan' Message='You can Join' Time='4:30AM'/>
                            <ChatBar Profile={Profile4} Username='MrJoker' Message='I love you <3' Time='1h'/>
                            <ChatBar Profile={Profile5} Username='Ninja' Message='Hi there!' Time='Yesterday'/>
                            <ChatBar Profile={Profile6} Username='FazeClan' Message='You can Join' Time='4:30AM'/>
                            <ChatBar Profile={Profile1} Username='Elon Musk' Message='I love you <3' Time='1h'/>
                            <ChatBar Profile={Profile2} Username='Ninja' Message='Hi there!' Time='Yesterday'/>
                            <ChatBar Profile={Profile3} Username='FazeClan' Message='You can Join' Time='4:30AM'/>
                            <ChatBar Profile={Profile4} Username='MrJoker' Message='I love you <3' Time='1h'/>
                            <ChatBar Profile={Profile5} Username='Ninja' Message='Hi there!' Time='Yesterday'/>
                            <ChatBar Profile={Profile6} Username='FazeClan' Message='You can Join' Time='4:30AM'/>
                        </div>
                    </div>
                </div>
                <div className='chat-rightside'>
                    <div className='chat-rightside-content'>
                        <div className='header'>
                            <MessageHeader   Profile1={Profile1}  />
                        </div>
                        <div className='body chat-conversation'>
                            <SenderMessage  Profile={Profile1} Username='Saad Ouardi' Message='Hello How are you'  />
                            <ReceiverMessage Message='Im fine thanks for asking and you?' />
                            <SenderMessage  Profile={Profile1} Username='Saad Ouardi' Message='Im okay thanks for asking! any news'  />
                            <ReceiverMessage Message='news?' />
                            <ReceiverMessage Message='about?' />
                        </div>
                        <div className='footer'>
                            <MessageInput   handleMessage={handleMessage} Message={Message}  />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Messages;


function ChatBar({Profile, Username, Message, Time}){
    return (
        <>
            <div className='ChatBar container Flex-Center'>
                <div className='Profile-Container'>
                    <img src={Profile} alt={Username} className='Profile'/>
                </div>
                <div className='Chat-Data Flex-Center Flex-Column'>
                    <div className='name-time Flex-Center Space-Between'>
                        <p>{Username}</p>
                        <p>{Time}</p>
                    </div>
                    <div className='message-seen flex-space-between'>
                        <p>{Message}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}
function SenderMessage({Profile, Username, Message}) {
    return (
        <div className='UserConversation'>
            <div>
                <img src={Profile} alt={Username} className='profile' />
            </div>
            <div className='Background'>
                <p>{Message}</p>
            </div>
        </div>
    );
}
function ReceiverMessage({Message}) {
    return (
        <div className='MainConversation'>
            <div className='Background'>
                <p>{Message}</p>
            </div>
        </div>
    );
}
function MessageInput({handleMessage, Message}) {
    return (
        <div className='message-input'>
            <div className='message-emojis-attach'>
                <div title='Emojis, GIFs, Sickers' className='icon-bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5199 19.8634C10.5955 18.6615 10.8833 17.5172 11.3463 16.4676C9.81124 16.3252 8.41864 15.6867 7.33309 14.7151L8.66691 13.2248C9.55217 14.0172 10.7188 14.4978 12 14.4978C12.1763 14.4978 12.3501 14.4887 12.5211 14.471C14.227 12.2169 16.8661 10.7083 19.8634 10.5199C19.1692 6.80877 15.9126 4 12 4C7.58172 4 4 7.58172 4 12C4 15.9126 6.80877 19.1692 10.5199 19.8634ZM19.0233 12.636C15.7891 13.2396 13.2396 15.7891 12.636 19.0233L19.0233 12.636ZM22 12C22 12.1677 21.9959 12.3344 21.9877 12.5L12.5 21.9877C12.3344 21.9959 12.1677 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 10C10 10.8284 9.32843 11.5 8.5 11.5C7.67157 11.5 7 10.8284 7 10C7 9.17157 7.67157 8.5 8.5 8.5C9.32843 8.5 10 9.17157 10 10ZM17 10C17 10.8284 16.3284 11.5 15.5 11.5C14.6716 11.5 14 10.8284 14 10C14 9.17157 14.6716 8.5 15.5 8.5C16.3284 8.5 17 9.17157 17 10Z"></path></svg>
                </div>
                <div title='Attach' className='icon-bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.8287 7.75737L9.1718 13.4142C8.78127 13.8047 8.78127 14.4379 9.1718 14.8284C9.56232 15.219 10.1955 15.219 10.586 14.8284L16.2429 9.17158C17.4144 8.00001 17.4144 6.10052 16.2429 4.92894C15.0713 3.75737 13.1718 3.75737 12.0002 4.92894L6.34337 10.5858C4.39075 12.5384 4.39075 15.7042 6.34337 17.6569C8.29599 19.6095 11.4618 19.6095 13.4144 17.6569L19.0713 12L20.4855 13.4142L14.8287 19.0711C12.095 21.8047 7.66283 21.8047 4.92916 19.0711C2.19549 16.3374 2.19549 11.9053 4.92916 9.17158L10.586 3.51473C12.5386 1.56211 15.7045 1.56211 17.6571 3.51473C19.6097 5.46735 19.6097 8.63317 17.6571 10.5858L12.0002 16.2427C10.8287 17.4142 8.92916 17.4142 7.75759 16.2427C6.58601 15.0711 6.58601 13.1716 7.75759 12L13.4144 6.34316L14.8287 7.75737Z"></path></svg>
                </div>
            </div>
            <div className='message-input-container'>
                <input type="text" placeholder='Aa' id='messageInput' onChange={handleMessage} />
            </div>
            <div className='message-chatmessage-voicemessage'>
                {Message && <div title='Record voice message' className='icon-bg'>
                        <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path></svg>
                    </div>}
                {!Message && <div title='Send message' className='icon-bg'>
                        <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z"></path></svg>                                
                    </div>}
            </div>
        </div>
    );
}
function MessageHeader({Profile1}) {
    return (
        <div className='flex-center-spacebetween'>
            <div className='flex-center-center'>
                <img src={Profile1} alt="" className='Profile' />
                <h1>Elon Musk</h1>
            </div>
            <div className='flex-center-center'>
                <div title='Start a voice call' className='Icon-Bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                </div>
                <div title='Start a video call' className='Icon-Bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2Z"></path></svg>                                    
                </div>
                <div title='Conversation information' className='Icon-Bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path></svg>                                   
                </div>
            </div>
        </div>
    );
}