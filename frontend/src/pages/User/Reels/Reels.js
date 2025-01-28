import React, { useState, useEffect, useContext } from 'react';
import { Sidebar } from '../../../components/User/Main/Sidebar/Sidebar';
import { Subscribe } from '../../../components/User/Home/Subscribe/Subscribe';
import { Follow } from '../../../components/User/Home/Follow/Follow';
import { Trends } from '../../../components/User/Home/Trends/Trends';

import './Reels.scss';

const Reels = () => {
    
    const scrollHandler = () => {
        // Scroll logic to move to the next reel section on each scroll
        const reelSections = document.querySelectorAll('.reel');
        let currentScrollPosition = window.scrollY;
        
        // Find the next reel section to scroll into view
        reelSections.forEach((reel, index) => {
            const rect = reel.getBoundingClientRect();
            const reelTop = rect.top + window.scrollY;

            if (currentScrollPosition < reelTop + rect.height / 2 && currentScrollPosition > reelTop - rect.height / 2) {
                // Scroll to the next reel in a smooth manner
                const nextIndex = (index + 1) % reelSections.length;
                reelSections[nextIndex].scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    return (
        <main>
            <div className='side-1 sticky__container Primary-Padding'>
                <Sidebar/>
            </div>
            <div className='side-2'>
                <div className='reel' id='1'>
                    <video width="350" height="650">
                        <source src='https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4' type="video/mp4"/>
                    </video>
                    <div className='reel-options flex-center-center flex-column'>
                        <div title='Like'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
                            </div>
                            <p>134K</p>
                        </div>
                        <div className='Dislike'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 15H19V3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15ZM16.7071 16.2929L10.3066 22.6934C10.1307 22.8693 9.85214 22.8891 9.65308 22.7398L8.8005 22.1004C8.3158 21.7369 8.09739 21.1174 8.24686 20.5303L9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H16C16.5523 3 17 3.44772 17 4V15.5858C17 15.851 16.8946 16.1054 16.7071 16.2929Z"></path></svg>
                            </div>
                            <p>34K</p>
                        </div>
                        <div title='Comments'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10V12H9V10H7ZM11 10V12H13V10H11ZM15 10V12H17V10H15Z"></path></svg>
                            </div>
                            <p>4K</p>
                        </div>
                        <div className='Share'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg>
                            </div>
                            <p>Share</p>
                        </div>
                        <div className='Options'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reel' id='2'>
                    <video width="350" height="650">
                        <source src='https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4' type="video/mp4"/>
                    </video>
                    <div className='reel-options flex-center-center flex-column'>
                        <div title='Like'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
                            </div>
                            <p>134K</p>
                        </div>
                        <div className='Dislike'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 15H19V3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15ZM16.7071 16.2929L10.3066 22.6934C10.1307 22.8693 9.85214 22.8891 9.65308 22.7398L8.8005 22.1004C8.3158 21.7369 8.09739 21.1174 8.24686 20.5303L9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H16C16.5523 3 17 3.44772 17 4V15.5858C17 15.851 16.8946 16.1054 16.7071 16.2929Z"></path></svg>
                            </div>
                            <p>34K</p>
                        </div>
                        <div title='Comments'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10V12H9V10H7ZM11 10V12H13V10H11ZM15 10V12H17V10H15Z"></path></svg>
                            </div>
                            <p>4K</p>
                        </div>
                        <div className='Share'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg>
                            </div>
                            <p>Share</p>
                        </div>
                        <div className='Options'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reel' id='3'>
                    <video width="350" height="650">
                        <source src='https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4' type="video/mp4"/>
                    </video>
                    <div className='reel-options flex-center-center flex-column'>
                        <div title='Like'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
                            </div>
                            <p>134K</p>
                        </div>
                        <div className='Dislike'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 15H19V3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15ZM16.7071 16.2929L10.3066 22.6934C10.1307 22.8693 9.85214 22.8891 9.65308 22.7398L8.8005 22.1004C8.3158 21.7369 8.09739 21.1174 8.24686 20.5303L9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H16C16.5523 3 17 3.44772 17 4V15.5858C17 15.851 16.8946 16.1054 16.7071 16.2929Z"></path></svg>
                            </div>
                            <p>34K</p>
                        </div>
                        <div title='Comments'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10V12H9V10H7ZM11 10V12H13V10H11ZM15 10V12H17V10H15Z"></path></svg>
                            </div>
                            <p>4K</p>
                        </div>
                        <div className='Share'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg>
                            </div>
                            <p>Share</p>
                        </div>
                        <div className='Options'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='side-3 column-gap__container sticky__container'>
                <Subscribe/>
                <Follow/>
                <Trends/>
            </div>
        </main>
    )
}

export default Reels;

