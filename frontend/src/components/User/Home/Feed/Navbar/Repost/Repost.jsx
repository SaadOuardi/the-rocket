import React, { useState } from 'react';
import { Alert } from '../../../../../../lightboxes/Alert/Alert';
import './Repost.scss';

export const Repost = ({data}) => {
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
            <li className='Repost' title='Repost'>
                <div className='Icon-Bg' onClick={handleSave}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi repost-icon" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 2.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/></svg>
                </div>
                {data &&
                    <h3>4.2K</h3>
                }
            </li>

            {Save && 
                <Alert Icon={Icon} Message={`Post reposted successfully`} BgColor='rgb(4, 186, 4)'/>
            }
        </>
    )
}

