import React, { useState, useEffect } from 'react';
import { CreatePost } from './CreatePost/CreatePost';
import DefaultImage from '../../../../assets/images/profile/Saad.jpg';

import './Post.scss';

export const Post = () => {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [FeedData, setFeedData] = useState([]);

    const handleShowCreatePost = ()=>{
        setShowCreatePost(!showCreatePost);
    }
    
    useEffect(() => {
        fetch('http://localhost:5000/api/user')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setFeedData(data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);
    
    return(
        <>
            <div className="post container">
                <div className="user-post">
                    <div className='user-profile-post Flex-Center'>
                        <div className="user-profile">
                            <img src={FeedData.profile_picture || DefaultImage} alt={FeedData.username}/>
                        </div>
                        <div className='input-post'>
                            <input type="text" placeholder="What is happening?" readOnly onClick={()=>{handleShowCreatePost()}} />
                            {showCreatePost &&
                                <CreatePost Profile={FeedData.profile_picture || DefaultImage} Username={FeedData.username} userID={FeedData.id}/>
                            }
                        </div>
                    </div>
                    <div className="post-navbar">
                        <div className="flex-start-center">
                            <div title='Live' className='Icon-Bg' onClick={()=>{handleShowCreatePost()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16C16.5523 4 17 4.44772 17 5V9.2Z"></path></svg>                            
                            </div>
                            <div title='Gallery' className='Icon-Bg' onClick={()=>{handleShowCreatePost()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16"><path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/></svg>
                            </div>
                            <div title='Feeling' className='Icon-Bg' onClick={()=>{handleShowCreatePost()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>   
    );
};