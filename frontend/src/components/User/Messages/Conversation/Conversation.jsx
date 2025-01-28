// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import './Conversation.scss';

// const socket = io('http://localhost:5000');

// export const Conversation = ({ userId, receiverId, conversationData }) => {
//     const [messages, setMessages] = useState(conversationData);
//     const [newMessage, setNewMessage] = useState('');

//     useEffect(() => {
//         setMessages(conversationData);
//     }, [conversationData]);

//     useEffect(() => {
//         socket.on('receive_message', (message) => {
//             setMessages((prevMessages) => [...prevMessages, message]);
//         });

//         return () => socket.off('receive_message');
//     }, []);

//     const handleSendMessage = () => {
//         if (newMessage.trim()) {
//             const message = {
//                 sender_id: userId,
//                 receiver_id: receiverId,
//                 content: newMessage,
//                 created_at: new Date().toISOString(),
//             };
//             socket.emit('send_message', message);
//             setMessages((prevMessages) => [...prevMessages, message]);
//             setNewMessage('');
//         }
//     };

//     return (
//         <div className='Conversation'>
//             <div className='Header'>
//                 <div className='UserData'>
//                     <div className='UserProfile'>
//                         <img src={conversationData[0]?.profile_picture} alt='' />
//                     </div>

//                     <div className='UserName-UserActive'>
//                         <h1>{conversationData[0]?.username}</h1>
//                         <p>
//                             <span>Active </span>
//                             <span>1h ago</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className='Body'>
//                 {messages.map((msg, index) => (
//                     <div key={index} className={msg.sender_id === userId ? 'MainConversation' : 'UserConversation'}>
//                         <div className='Background'>
//                             <p>{msg.content}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className='Footer'>
//                 <input
//                     type="text"
//                     placeholder='Aa'
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                 />
//                 <button onClick={handleSendMessage}>Send</button>
//             </div>
//         </div>
//     );
// };




// import React , {useState} from 'react';

// import './Conversation.scss';

// export const Conversation = ({data}) => {
//     // VOICE CALL //
//     // FACE CALL //
//     // VOICE MESSAGE //

//     // TEXT MESSAGE //
//     const [Message,setMessage] = useState(true);
//     const handleMessage = () =>{
//         let messageInput = document.getElementById('messageInput');
//         if(messageInput.value===''){
//             setMessage(true);
//         }else{
//             setMessage(false);
//         }
//     }

//     // Minimize Chat //
//     const [Minimize,setMinimize] = useState(true);
//     const handleMinimize = () =>{
//         if(Minimize){
//             document.getElementById('bodyConversation').style.display = 'none';
//             document.getElementById('footerConversation').style.display = 'none';
//         }else{
//             document.getElementById('bodyConversation').style.display = 'block';
//             document.getElementById('footerConversation').style.display = 'block';
//         }
//         setMinimize(!Minimize)
//     }

//     // Close Chat //
//     const [Close,setClose] = useState(true);
//     const handleClose = () => {
//         setClose(!Close);
//     }


//     return (
//         <>
//             {Close &&
//                 <div className='Conversation'>
//                     <div className='Header' onClick={handleMinimize}>
//                         <div>
//                             <div className='UserData'>
//                                 <div className='UserProfile'>
//                                     <img src={data.profile_picture} alt='' />
//                                 </div>

//                                 <div className='UserName-UserActive'>
//                                     <h1>{data.username}</h1>
//                                     <p>
//                                         <span>Active </span>
//                                         <span>1h ago</span>
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className='Options'>
//                                 {Minimize &&
//                                     <>
//                                         <div className='Icon-Bg' title='Start a voice call'>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>                            
//                                         </div>
                                        
//                                         <div className='Icon-Bg' title='Start a video call'>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2ZM5 8V10H7V8H5Z"></path></svg>
//                                         </div>

//                                         <div className='Icon-Bg' title='Minimize chat' onClick={handleMinimize}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg>                            
//                                         </div>

//                                         <div className='Icon-Bg' title='Close chat' onClick={handleClose}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
//                                         </div>
//                                     </>
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                     <div className='Body' id='bodyConversation'>
//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={data.profile_picture} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>{data.content}</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>{data.content}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='Footer' id='footerConversation'>
//                         <div>
//                             <div className='Icon-Bg'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path></svg>
//                             </div>

//                             <div className=''>
//                                 <input type="text" placeholder='Aa' id='messageInput' onChange={handleMessage}/>
//                             </div>
//                             {Message && 
//                                 <div className='Icon-Bg'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
//                                 </div>
//                             }
//                             {!Message && 
//                                 <div className='Icon-Bg'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z"></path></svg>                                
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }







// import React , {useState} from 'react';
// import Profile from '../../../../assets/images/Profile/Tfue.png';

// import './Conversation.scss';

// export const Conversation = ({data}) => {
//     // Call //

//     // FaceCall//

//     // Minimize Chat //
//     const [Minimize,setMinimize] = useState(true);
//     const handleMinimize = () =>{
//         if(Minimize){
//             document.getElementById('bodyConversation').style.display = 'none';
//             document.getElementById('footerConversation').style.display = 'none';
//         }else{
//             document.getElementById('bodyConversation').style.display = 'block';
//             document.getElementById('footerConversation').style.display = 'block';
//         }
//         setMinimize(!Minimize)
//     }

//     // Close Chat //
//     const [Close,setClose] = useState(true);
//     const handleClose = () => {
//         setClose(!Close);
//     }

//     // Voice Message //

//     // Text Message //
//     const [Message,setMessage] = useState(true);
//     const handleMessage = () =>{
//         let messageInput = document.getElementById('messageInput');
//         if(messageInput.value===''){
//             setMessage(true);
//         }else{
//             setMessage(false);
//         }
//     }

//     return (
//         <>
//             {Close &&
//                 <div className='Conversation'>
//                     <div className='Header' onClick={handleMinimize}>
//                         <div>
//                             <div className='UserData'>
//                                 <div className='UserProfile'>
//                                     <img src={Profile} alt='' />
//                                 </div>

//                                 <div className='UserName-UserActive'>
//                                     <h1>Saad Ouardi</h1>
//                                     <p>
//                                         <span>Active </span>
//                                         <span>1h ago</span>
//                                     </p>
//                                 </div>

//                                 <div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
//                                 </div>
//                             </div>

//                             <div className='Options'>
//                                 {Minimize &&
//                                     <>
//                                         <div className='Icon-Bg' title='Start a voice call'>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>                            
//                                         </div>
                                        
//                                         <div className='Icon-Bg' title='Start a video call'>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2ZM5 8V10H7V8H5Z"></path></svg>
//                                         </div>

//                                         <div className='Icon-Bg' title='Minimize chat' onClick={handleMinimize}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg>                            
//                                         </div>

//                                         <div className='Icon-Bg' title='Close chat' onClick={handleClose}>
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>
//                                         </div>
//                                     </>
//                                 }
//                             </div>
//                         </div>
//                     </div>

//                     <div className='Body' id='bodyConversation'>
//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>Good Morning!</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>Hello, How's Going!</p>
//                             </div>
//                         </div>

//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>I'm doing great and U?</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>I'm doing fine thanks!</p>
//                             </div>
//                         </div>
//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>Good Morning!</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>Hello, How's Going!</p>
//                             </div>
//                         </div>

//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>I'm doing great and U?</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>I'm doing fine thanks!</p>
//                             </div>
//                         </div>
//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>Good Morning!</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>Hello, How's Going!</p>
//                             </div>
//                         </div>

//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>I'm doing great and U?</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>I'm doing fine thanks!</p>
//                             </div>
//                         </div>
//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>Good Morning!</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>Hello, How's Going!</p>
//                             </div>
//                         </div>

//                         <div className='UserConversation'>
//                             <div>
//                                 <img src={Profile} alt="" />
//                             </div>
//                             <div className='Background'>
//                                 <p>I'm doing great and U?</p>
//                             </div>
//                         </div>

//                         <div className='MainConversation'>
//                             <div className='Background'>
//                                 <p>I'm doing fine thanks!</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='Footer' id='footerConversation'>
//                         <div>
//                             <div className='Icon-Bg'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path></svg>
//                             </div>

//                             <div className=''>
//                                 <input type="text" placeholder='Aa' id='messageInput' onChange={handleMessage}/>
//                             </div>
//                             {Message && 
//                                 <div className='Icon-Bg'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
//                                 </div>
//                             }
//                             {!Message && 
//                                 <div className='Icon-Bg'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z"></path></svg>                                
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }