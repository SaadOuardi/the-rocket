import React from 'react';
import './User.scss';
export const User = ({User,UserUsername}) => {
    return (
        <>
            <div className='User'>
                <div className='Username'>
                    <h1>{User} | @{UserUsername}</h1>
                </div>

                <div className='Options'>
                    <div className='UserPost'>
                        <p>
                            <strong><span>10 </span></strong>
                            posts
                        </p>
                    </div>

                    <div className='UserFollowers'>
                        <p>
                            <strong><span>10 </span></strong>
                            followers
                        </p>
                    </div>

                    <div className='UserFollowing'>
                        <p>
                            <strong><span>10 </span></strong>
                            following
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

