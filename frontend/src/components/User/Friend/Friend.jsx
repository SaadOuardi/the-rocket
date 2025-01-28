import React, { useState } from 'react';
import './Friend.scss';

export const Friend = ({data}) => {
    const [action, setAction] = useState('Follow');
    const handleAddFriend = () => {
        setAction('Following');
    }
    return (
        <>
            <div className='Friend'>
                    <div className='Icon-Bg Remove-Friend'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                    </div>
                <div className='Friend-Content'>
                    <div className='Header'>
                        <div className='Header-Content'>
                            <div className='Cover'>
                                {data.cover_picture &&
                                    <img src={data.cover_picture} alt=''/>
                                }
                            </div>
                                <div className='Profile'>
                                    <img src={data.profile_picture} alt='' />
                                </div>
                        </div>
                    </div>
                    <div className='Body'>
                        <div className='Body-Content Flex-Center'>
                            <div className='Flex-Center Flex-Column'>
                                <p>@{data.username}</p>
                                <p>{data.first_name} {data.last_name}</p>
                            </div>
                            <div className='verification'>
                            </div>
                        </div>
                    </div>
                    <div className='Footer'>
                        <div className='Footer-Content Flex-Center Flex-Column'>
                            <button onClick={handleAddFriend} className='Flex-Center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
                                <span>{action}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

