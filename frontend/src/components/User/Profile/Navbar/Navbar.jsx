import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.scss';
export const Navbar = () => {
    const location = window.location.pathname;
    const profileNavbarItems = [
        { label: "Posts", href: "/profile/posts" },
        { label: "About", href: "/profile/about" },
        { label: "Friends", href: "/profile/friends" },
        { label: "Photos", href: "/profile/photos" },
        { label: "Videos", href: "/profile/videos" },
        { label: "Reels", href: "/profile/reels" },
        { label: "Groups", href: "/profile/groups" },
    ];

    return (
        <>
            <div className='profile-navbar'>
                {profileNavbarItems.map((item, index) =>(
                    <Link to={item.href} key={index} className= {`${location === item.href ? 'active-link' : ''}`}>
                        <div className='Container-Bg' >
                            {item.label}
                        </div>
                    </Link>
                ))}
                {/* <a href="/profile/posts">
                    <div className='Container-Bg'>
                        Posts
                    </div>
                </a>
                <a href="/profile/about">
                    <div className='Container-Bg'>
                        About
                    </div>
                </a>
                <a href="/profile/friends">
                    <div className='Container-Bg'>
                        Friends
                    </div>
                </a>
                <a href="/profile/photos">
                    <div className={` Container-Bg`}>
                        Photos
                    </div>
                </a>
                <a href="/profile/videos">
                    <div className='Container-Bg'>
                        Videos
                    </div>
                </a>
                <a href="/profile/reels">
                    <div className='Container-Bg'>
                        Reels
                    </div>
                </a>
                <a href="/profile/groups">
                    <div className='Container-Bg'>
                        Groups
                    </div>
                </a> */}
            </div>
        </>
    )
}

