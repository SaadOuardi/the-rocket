import React, { useState } from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';
import { UserComment } from '../../../../components/User/Home/Feed/Navbar/Comment/Comment';
import Photo1 from '../../../../assets/images/account/photos/photo-1.jpg';
import Photo2 from '../../../../assets/images/account/photos/photo-2.jpg';
import Photo3 from '../../../../assets/images/account/photos/photo-3.jpg';
import Photo4 from '../../../../assets/images/account/photos/photo-4.jpg';
import Photo5 from '../../../../assets/images/account/photos/photo-5.jpg';
import Photo6 from '../../../../assets/images/account/photos/photo-6.jpg';

import './Photos.scss';

const Photos = ({userID}) => {
    return (
        <main>
            <div className='Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>

                <div className='Main-Body primary-padding flex-center-center'>
                    <div className='container flex-center-center'>
                        <Photo   Image={Photo1} Likes={80} Comments={7}  />
                        <Photo   Image={Photo5} Likes={57} Comments={10}  />
                        <Photo   Image={Photo6} Likes={63} Comments={3}  />
                        <Photo   Image={Photo2} Likes={132} Comments={6}  />
                        <Photo   Image={Photo3} Likes={89} Comments={7}  />
                        <Photo   Image={Photo4} Likes={94} Comments={3}  />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Photos;

function Photo({Image, Likes, Comments}) {
    const [imageCover, setImageCover] = useState(false);

    const handleImageCover = () => {
        setImageCover(!imageCover);
    }
    return (
        <>
            <div className='photo' onClick={handleImageCover}>
                <img src={Image} alt="" />
                <div className='photo-hover flex-center-center'>
                    <div className='flex-center-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
                        <span>{Likes}</span>
                    </div>
                    <div className='flex-center-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242Z"></path></svg>
                        <span>{Comments}</span>
                    </div>
                </div>
            </div>
            {imageCover &&
                <div className='photo-cover-container'>
                    {/* <button 
                        onClick={handleImageCover}
                        className='close'
                    >
                        X
                    </button> */}

                    <div className='btn-cover-container'>
                        <img src={Image} alt='' className='photo-cover'/>
                    </div>
                    <div className='comment-section'>
                        <div className='flex-center-spacebetween'>
                            <div className='flex-center-center'>
                                <img 
                                    src={Image} 
                                    alt="" 
                                    className='profile'
                                />
                                <p>Saad Ouardi</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/></svg>
                                <button>Follow</button>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/></svg>
                            </div>
                        </div>
                        <hr/>
                        <div className='comment-list Scroll'>
                            <UserComment Profile={Image} Username='Elen Musk' Comment='Soon!' Time='14h'/>
                            <UserComment Profile={Image} Username='Elen Musk' Comment='Soon!' Time='14h'/>
                            <UserComment Profile={Image} Username='Elen Musk' Comment='Soon!' Time='14h'/>
                            <UserComment Profile={Image} Username='Elen Musk' Comment='Soon!' Time='14h'/>
                            <UserComment Profile={Image} Username='Elen Musk' Comment='Soon!' Time='14h'/>
                        </div>
                        <hr/>
                        <div className='flex-center-center'>
                            <img 
                                src={Image} 
                                alt=""
                                className='profile' 
                            />
                            <input 
                                type="text"
                                placeholder="Add a comment..." 
                            />
                            <button>Post</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
