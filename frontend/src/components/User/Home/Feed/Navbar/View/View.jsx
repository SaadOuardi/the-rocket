import React, { useState } from 'react';
import { Alert } from '../../../../../../lightboxes/Alert/Alert';
import './View.scss';

export const View = ({data}) => {
    const FriendIcon = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi view-icon" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>
        )
    }
    const [Save,setSave] = useState(false);
    const handleSave = () =>{
        setSave(!Save);
        setTimeout(() => {
            setSave(false);
        }, 4000);
    }
    return (
        <>
            <li className='View' title='View'>
                <div className='Icon-Bg' onClick={handleSave}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi view-icon" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>
                </div>
                {data &&
                    <h3>{data}</h3>
                }
            </li>

            {Save && 
                <Alert Icon={FriendIcon} Message={`5.2M people have seen this post`} BgColor='rgb(17, 120, 255)'/>
            }
        </>
    )
}

