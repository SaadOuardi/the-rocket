import React, { useState } from 'react';
import { Alert } from '../../../../../../lightboxes/Alert/Alert';

import './Save.scss';

export const Save = () => {
    const Icon = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
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
            <li className='Save' title='Save' onClick={handleSave}>
                <div className='Icon-Bg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bookmark-icon" viewBox="0 0 16 16"><path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/></svg>
                </div>
                <span>Save</span>
            </li>

            {Save && 
                <Alert Icon={Icon} Message={`Post saved successfully`} BgColor='rgb(4, 186, 4)'/>
            }
        </>
    )
}