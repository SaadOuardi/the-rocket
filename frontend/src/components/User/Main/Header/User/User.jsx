import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../../../../../assets/images/profile/Saad.jpg';
import './User.scss';

export const User = () => {
    const [Profile,setProfile] = useState(false);
    const [Member,setMember] = useState([]);

    const handleProfile = (event) => {
        const clickedId = event.target.id;
        if (clickedId === 'profile') {
            setProfile(!Profile);
        } else {
            setProfile(false);
        }
    }

    const handleLogout = () => {
        window.location.href = '/login';
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/user')
            .then(response =>{
                if(!response.ok){
                    throw new Error(`error! status: ${response.status}`)
                }
                return response.json()
            })
            .then(data =>{
                setMember(data);
            })
            .catch(error =>{
                console.error(`error fetching member ${error}`)
            })

    }, []);

    window.addEventListener('click', handleProfile);

    return (
        <>
            <div className='user-profile' id='profile'>
                <div className='Icon-Bg'>
                    <img src={Member.profile_picture || DefaultImage} alt="" id='profile'/>
                </div>
                {Profile &&
                    <div className='dropdown-menu'>
                        <div className='dropdown'>
                            <Link to='/profile'>
                                <img src={Member.profile_picture || DefaultImage} alt={Member.username} />
                                {` ${Member.first_name || 'Saad'} ${Member.last_name || 'Ouardi'} | @${Member.username || 'MrJoker'}`}
                            </Link>
                            <hr/>
                            <Link to='/settings'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                                Settings & privacy
                            </Link>
                            <Link to='/support'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi wishlist__icon" viewBox="0 0 16 16"><path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/></svg>
                                Help & support
                            </Link>
                            <Link to='/accessibility'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                                Display & accessibility
                            </Link>
                            <hr/>
                            <Link to='/feedback'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>
                                Give feedback
                            </Link>
                            <hr/>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}