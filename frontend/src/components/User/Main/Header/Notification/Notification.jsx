import React , { useState } from 'react'
import User1 from '../../../../../assets/images/profile/Ninja.jpg';
import User2 from '../../../../../assets/images/profile/ElonMusk.webp';
import User3 from '../../../../../assets/images/profile/Fortnite.png';
import User4 from '../../../../../assets/images/profile/Tfue.png';
import Like from '../../../../../assets/images/design/Notifications/like.png';
import Comment from '../../../../../assets/images/design/Notifications/comment.png';
import Share from '../../../../../assets/images/design/Notifications/share.png';
import Request from '../../../../../assets/images/design/Notifications/request.png';
import Mention from '../../../../../assets/images/design/Notifications/mention.png';
import './Notification.scss';

export const NotificationBtn = () => {
    const [seen, SetSeen] = useState(false);
    const [NotificationVisibility, setNotificationVisibility] = useState(false);
    
    const handleNotification = (event) => {
        const clickedId = event.target.id;
        if (clickedId === 'notifications') {
            setNotificationVisibility(!NotificationVisibility);
            SetSeen(true);
        } else {
            setNotificationVisibility(false);
        }
    }

    window.addEventListener('click',handleNotification);

    return (
        <>
            <div className='Messages'>
                <div className='Message__container'>
                    <div className='main-icon'>
                        <div className='Icon-Bg' title='Notifications' id='notifications'>
                            <svg id='notifications' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
                        </div>
                        {!seen &&
                            <div className='notification-icon'>
                                <span>5</span>
                            </div>
                        }
                    </div>

                    { NotificationVisibility &&
                        <div className='container'>
                            <div className='Header'>
                                <h1>Notifications</h1>
                            </div>

                            <div className='Messages_List'>
                                <Notification Image={User1} User='Ninja' Action='liked your post' Time='1h' Icon={Like}/>
                                <Notification Image={User2} User='Elon Musk' Action='shared a post' Time='1 day ago' Icon={Share}/>
                                <Notification Image={User3} User='Fortnite' Action='sent you a friend request' Time='3 weeks ago' Icon={Request}/>
                                <Notification Image={User4} User='Tfue' Action='mentioned you in a comment' Time='1 month ago' Icon={Mention}/>
                                <Notification Image={User2} User='Musk' Action='made a comment to your post' Time='03 Jan 2022' Icon={Comment}/>
                            </div>
                            
                            <a href="/">
                                <div className='Flex-Center'>
                                    <button>See all in Notifications</button>
                                </div>
                            </a>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export const Notification = ({Image,User,Action,Time,Icon}) =>{
    return (
        <>
            <div className='Notification Flex-Center'>
                <div className='Notification-Content Flex-Center'>
                    <div className='Flex-Start Profile-Picture'>
                        <img src={Image} alt="" className='Profile'/>
                    </div>

                    <div className='User-Data Flex-Center Flex-Column'>
                        <div className='Flex-Center'>
                            <p className='Name'>{User}</p>
                            <p className='Action'>{Action}</p>
                        </div>

                        <div>
                            <p className='Time'>
                                <span>a </span>
                                <span>{Time} </span>
                                <span>ago</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='Action-Bg'>
                    <img src={Icon} alt="" />
                </div>
            </div>
        </>
    )
}



