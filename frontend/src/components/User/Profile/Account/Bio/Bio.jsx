import React from 'react';
import './Bio.scss';

export const Bio = ({Bio}) => {
    return (
        <>
            <div className='Bio'>
                <div className='Bio-Content'>
                    <p>{Bio}</p>
                </div>
            </div>
        </>
    )
}

