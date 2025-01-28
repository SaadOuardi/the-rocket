import { useState } from 'react';
import { Alert } from '../../../../lightboxes/Alert/Alert';
import User2 from '../../../../assets/images/profile/Tfue.png';
import User3 from '../../../../assets/images/profile/ElonMusk.webp';
import User4 from '../../../../assets/images/profile/Fortnite.png';
import './Follow.scss';

export const Follow = () => {
    return(
        <>
            <div className="Follow container">
                <div className="container__content follow__container_list">
                    <div className="container__title">
                        <h2>Who to follow</h2>
                    </div>
                    <User userProfile={User2} userName='Tfue' userUsername='Tfue'/>
                    <User userProfile={User3} userName='Elon Musk' userUsername='ElonMusk'/>
                    <User userProfile={User4} userName='Fortnite' userUsername='Fortnite'/>
                    <div className="show-more__container">
                        <a href="/friends" className="show-more__link">Show more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export const User = ({userProfile,userName,userUsername}) => {
    const [Visibility, setVisibility] = useState(false);
    const [Follow,setFollow] = useState(false);
    const [status,setStatus] = useState('Follow');
    const [Action,setAction] = useState('followed');
    const FriendIcon = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>    
        )
    }
    const handleFollow = () =>{
        setVisibility(true);
        setFollow(!Follow)
        if(!Follow){
            setStatus('Following');
            setAction('followed');
        }else{
            setStatus('Follow');
            setAction('unfollowed')
        }
        setTimeout(() => {
            setVisibility(false);
        }, 4000);
    }
    return (
        <>
            <div className="follow__container">
                <div className="profile-card">
                    <img src={userProfile} alt="" className="image" />
                    <div className="user-data">
                        <div className="user__container Flex-Center">
                            <span>{userName}</span>
                            <div className="Verification Flex-Center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="user-username">@{userUsername}</h6>
                        </div>
                    </div>
                </div>
                
                <div className="follow-btn__container">
                    <button className="follow-btn" onClick={handleFollow}>{status}</button>
                </div>
            </div>

            {Visibility && 
                <Alert Icon={FriendIcon} Message={`You ${Action} @${userUsername} successfully`} BgColor='rgb(17, 120, 255)'/>
            }
        </>
    )
}

export default Follow
