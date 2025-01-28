import React, { useState } from 'react';
import { Alert } from '../../../../../../lightboxes/Alert/Alert';

import './Share.scss';

export const Share = () => {
    const IconError = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>
        )
    }
    const [Save, setSave] = useState(false);
    const handleSave = () =>{
        setSave(!Save);
        setTimeout(() => {
            setSave(false);
        }, 4000);
    }
    return (
        <>
            <li className='Share' title='Share' onClick={handleSave}>
                <div className='Icon-Bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi share-icon" viewBox="0 0 16 16"><path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/></svg>
                </div>
                <span>Share</span>
            </li>
            {Save &&
                <Alert Icon={IconError} Message={'This functionality is currently not available.'} BgColor='red'/>
            }
        </>
    )
}