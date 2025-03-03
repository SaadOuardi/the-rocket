import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { More } from './More/More';
import { Alert } from '../../../../lightboxes/Alert/Alert';
import Profile from '../../../../assets/images/profile/Flyfox.webp';
import Profile1 from '../../../../assets/images/profile/Saad.jpg';
import Profile2 from '../../../../assets/images/profile/Ishowspeed.jpg';
import Profile3 from '../../../../assets/images/profile/ElonMusk.webp';
import './Feed.scss';

export const Feed = ({ feed, onDelete, userId }) => {
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [comment, setComment] = useState(false);
    const [postHide, setPostHide] = useState(true);
    const [Error, setError] = useState(false);
    const [likeList, setLikeList] = useState(false);
    const [commentList, setCommentList] = useState(false);
    const [shareList, setShareList] = useState(false);


    const users = ['Psycho Joker', 
            'Elon Musk', 'Cristiano Ronaldo', 'Ninja', 'Mr Joker', 'Jeff']
    const IconError = () => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
        >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path>
        </svg>
    );

    const handlePostDelete = () => {
        setError(!Error);
        setTimeout(() => {
            setError(false);
            onDelete(feed.id);
        }, 2000);
    };
    
    const handlePostHide = () => {
        setPostHide(!postHide)
    };

    const handleLikeList = () => {
        setLikeList(!likeList);
    }

    const handleCommentList = () => {
        setCommentList(!commentList);
    }

    const handleShareList = () => {
        setShareList(!shareList);
    }

    useEffect(() => {
        const fetchLikeCount = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/posts/${feed.id}/likes`);
                if (!response.ok) throw new Error('Failed to fetch like count');
                const data = await response.json();
                setLikeCount(data.likeCount);
            } catch (error) {
                console.error('Error fetching like count:', error);
            }
        };
        fetchLikeCount();
    });

    return(
        <>
            <div className="Feed container">
                <div className='Feed-Content'>
                    <div className='Header'>
                        <div className='Header-Content Flex-Row Flex-Between'>
                            <div className='User-Data Flex-Center'>
                                <a href={`/@${feed.username}`}>
                                    <div className="User-Profile">
                                        <img 
                                            src={feed.profile_picture} 
                                            alt={feed.username} 
                                            className="image"
                                        />
                                    </div>
                                </a>
                                <div className='profile-flname-username-date Flex-Center Flex-Column Flex-Start'>
                                    <div className='user-flname_user-username Flex-Center'>
                                        <div className='flex-center-center'>
                                            <a 
                                                href={`/profile/${feed.username}`}
                                            >
                                                <div 
                                                    className='User-Name'
                                                >
                                                    <h5
                                                        className=""
                                                    >
                                                        {feed.first_name} {feed.last_name}
                                                    </h5>
                                                </div>
                                            </a>
                                            <div className="Verification Flex-Center">
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" 
                                                    height="16" 
                                                    fill="currentColor" 
                                                    className="bi bi-patch-check-fill" 
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
                                            </div>
                                        </div>
                                        <span className='sep'>|</span>
                                        <div className='User-Username'>
                                            <h6>@{feed.username}</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <h6 
                                            className="post-date"
                                        >
                                            {new Date(feed.created_at).toLocaleDateString()}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className='Options Flex-Center'>
                                <More 
                                    handleHidePost={handlePostHide}
                                />
                                <div 
                                    className='Icon-Bg' 
                                    title='Delete Post' 
                                    onClick={handlePostDelete}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor"
                                    >
                                        <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className='Body'
                    >
                        <div 
                            className='Body-Content Flex-Column'
                        >
                            <div 
                                className='Feed-Status'
                            >
                                <h5 
                                    className="Status__Post"
                                >
                                    {feed.content}
                                </h5>
                            </div>
                            {feed.image_url &&
                                <div 
                                    className='Feed-Photo-Video' 
                                    id='dataPost'
                                >
                                    <img 
                                        src={feed.image_url} 
                                        alt="" 
                                        className="Image__Post"
                                        id='imagePost'
                                    />
                                </div>
                            }
                        </div>
                    </div>
                    <div className='Footer'>
                        <hr/>
                        <div 
                            className='likes-comments-shares flex-center-spacebetween'
                        >
                            <div 
                                className='likes action flex-center-center'
                                onClick={handleLikeList}
                            >
                                <div className='Icon-Bg default-like'>
                                    <svg 
                                        id='Like' 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor"
                                    >
                                        <path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path>
                                    </svg>
                                </div>
                                <span>200</span>
                                <div className='likes-list container dropdown-list'>
                                    {users.map((user, index) => (
                                        <p key={index}>{user}</p>
                                    ))}
                                </div>
                            </div>
                            {likeList &&
                                <ActionsFormList Title='Likes'/>
                            }
                            <div className='comments-shares flex-center-center'>
                                
                                <div 
                                    className='comments action'
                                    onClick={handleLikeList}
                                >
                                    <p>
                                        <span>3 </span>
                                        comment
                                    </p>
                                    <div className='comments-list container dropdown-list'>
                                        {users.map((user, index) => (
                                            <p
                                                className=''
                                                key={index}>{user}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {commentList &&
                                    <ActionsFormList Title='Comments'/>
                                }
                                
                                <div 
                                    className='shares action'
                                    onClick={handleShareList}    
                                >
                                    <p>
                                        <span className=''>19 </span> 
                                        shares
                                    </p>
                                    <div className='shares-list container dropdown-list'>
                                        {users.map((user, index) => (
                                            <p 
                                                key={index}
                                                className=''
                                            >
                                                    {user}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                {shareList &&
                                        <ActionsFormList Title='Shares'/>
                                }
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <Navbar 
                                likeCount={likeCount} 
                                postId={feed.id} 
                                userId={userId}
                            />
                        </div>
                        {comment &&
                            <div className='comment-section'>
                                <hr/>
                                <div className='post-comment flex-center-start'>
                                    <img 
                                        src={feed.profile_picture} 
                                        alt="" 
                                        className='profile' 
                                    />
                                    <div className='comment-input-container'>
                                        <div 
                                            className='comment-actions flex-center-center'
                                        >
                                            <div 
                                                title='emojis' 
                                                className='icon-bg'
                                            >
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" 
                                                    height="16" 
                                                    fill="currentColor" 
                                                    class="bi bi-emoji-smile" 
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                                                </svg>
                                            </div>
                                            <div title='Attach' className='icon-bg'>
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" 
                                                    height="16" 
                                                    fill="currentColor" 
                                                    class="bi bi-paperclip" 
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
                                                </svg>
                                            </div>
                                            <div 
                                                title='Send message' 
                                                className='icon-bg'
                                            >
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" 
                                                    height="16" 
                                                    fill="currentColor" 
                                                    class="bi bi-send" 
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <textarea
                                            type="text" 
                                            placeholder='Write a comment...'
                                            className='comment-input'
                                        />
                                    </div>
                                </div>
                                <hr/>
                                <div className='comments-list flex-start-center flex-column'>
                                    <div className='main-user-comment container-list'>
                                        <PrimaryUserComment     />
                                        <div className='main-comments-to-comment-list'>
                                            <div className='comments-to-comment-list'>
                                                <PrimaryUserComment     />
                                                <PrimaryUserComment     />
                                                <PrimaryUserComment     />
                                            </div>
                                        </div>
                                        <PrimaryUserComment     />
                                        <div className='main-comments-to-comment-list'>
                                            <div className='comments-to-comment-list'>
                                                <PrimaryUserComment     />
                                                <PrimaryUserComment     />
                                                <PrimaryUserComment     />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {Error && 
                <Alert 
                    Icon={IconError} 
                    Message='Post deleted successfully' 
                    BgColor='red'
                />
            }
        </>
    )

    function PrimaryUserComment() {
        return (
            <>
                <div className='user-comment'>
                    <div className='user-comment-content'>
                        <div className='user-profile'>
                            <img 
                                src={feed.profile_picture} 
                                alt="" 
                                className='profile' 
                            />
                        </div>
                        <div 
                            className='comment-area-comment-actions flex-start-center flex-column'
                        >
                            <div 
                                className='comment-area container'
                            >
                                <div 
                                    className='flex-center-spacebetween'
                                >
                                    <a href="/">{feed.username}</a>
                                </div>
                                <div>
                                    <div className='comment-content flex-center-spacebetween'>
                                        <p>I like it! It was one of the greatest things that i have ever done</p>
                                    </div>
                                </div>
                            </div>
                            <div className='comment-actions flex-center-start'>
                                <span>11h</span>
                                <span>Reply</span>
                                <span>Share</span>
                            </div>
                        </div>
                    </div>

                    <div className='like-area flex-center-center'>
                        <div className='like-comment icon-bg'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                            >
                                <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
                            </svg>
                        </div>
                        <p>10</p>
                    </div>
                </div>
            </>
        );
    }

    function ActionsFormList({Title}) {
        const [visibility, setVisibility] = useState(true);
        
        const handleVisibility = () => {
            setVisibility(!visibility);
        }
        return (
            visibility &&
                <div 
                    className='actions-form-list container'
                    style={{
                        width: '30%',
                        padding: '20px',
                        position: 'fixed', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        zIndex: '1000',
                    }}
                >
                    <div 
                        className='Icon-Bg'
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={handleVisibility}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                    </div>
                    <div className='Header'>
                        <div className='Header-Contnet Flex-Center'>
                            <h1>{Title}</h1>
                        </div>
                    </div>

                    <hr/>
                    <div className='body'>
                        <div className=''>
                            <div className='flex-center-spacebetween'>
                                <div className='flex-center-center'>
                                    <div>
                                        <img src={Profile} alt="" className='profile'/>
                                    </div>
                                    <div>
                                        <p>FlyFox</p>
                                        <p>Ali Rassas</p>
                                    </div>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <div className='flex-center-spacebetween'>
                                <div className='flex-center-center'>
                                    <div>
                                        <img src={Profile1} alt="" className='profile'/>
                                    </div>
                                    <div>
                                        <p>MrJoker</p>
                                        <p>Saad Ouardi</p>
                                    </div>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>
                            <div className='flex-center-spacebetween'>
                                <div className='flex-center-center'>
                                    <div>
                                        <img src={Profile3} alt="" className='profile'/>
                                    </div>
                                    <div>
                                        <p>TheMusk</p>
                                        <p>Elon Musk</p>
                                    </div>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
        )
    } 
};