import React, { useState, useEffect } from 'react';
import './Like.scss';

export const Like = ({likeCount, postId, userId }) => {
    const [isLiked, setIsLiked] = useState('');
    const [defaultLike, setDefaultLike] = useState(true);
    const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

    const handleLikeClick = async () => {
        setDefaultLike(!defaultLike);
        try {
            if (isLiked) {
                // Unlike the post
                const response = await fetch(`http://localhost:5000/api/posts/${postId}/likes`, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({ userId }),
                });
                if (response.ok) {
                    setIsLiked(false);
                    setCurrentLikeCount(likeCount - 1)
                } else {
                    console.error('Error unliking post:', await response.json());
                }
            } else {
                // Like the post
                const response = await fetch(`http://localhost:5000/api/posts/${postId}/likes`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({ userId }),
                });
                if (response.ok) {
                    setIsLiked(true);
                    setCurrentLikeCount(likeCount + 1);
                } else {
                    console.error('Error liking post:', await response.json());
                }
            }
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };
    
    useEffect(() => {
        if (userId) {
            const checkIfLiked = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/posts/${postId}/likes/check?userId=${encodeURIComponent(userId)}`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    });
                    if (response.ok) {
                        const { liked } = await response.json();
                        setIsLiked(liked);
                    } else {
                        console.error('Error checking if post is liked:', await response.json());
                    }
                } catch (error) {
                    console.error('Error checking if post is liked:', error);
                }
            };
            checkIfLiked();
        }
    }, [postId, userId]);

    return (
        <li className={`Like ${isLiked ? ' liked' : ''}`} title='Like' onClick={handleLikeClick}>
            <div className='Icon-Bg'>
                <svg id='Like' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
            </div>

            <div className='count like-count'>
                { defaultLike ? (

                    likeCount === 0 ? 
                        <span>Like</span> : 
                            likeCount === 1 ? 
                                <h3>{likeCount} <span>Like</span></h3> : <h3>{likeCount} <span>Likes</span></h3>
                ) : (
                    currentLikeCount === 0 ? 
                        <span>Like</span> : currentLikeCount === 1 ? 
                            <h3>{currentLikeCount} <span>Like</span></h3> : <h3>{currentLikeCount} <span>Likes</span></h3>
                )}         
            </div>

        </li>
    );
};