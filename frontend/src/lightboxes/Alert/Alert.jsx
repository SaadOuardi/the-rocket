import React from 'react';
import './Alert.scss';

export const Alert = ({Icon, Message, BgColor}) => {
    return (
        <>
            <div className='Alert'>
                <div 
                    className='Alert-Content Flex-Center' 
                    style={{
                        backgroundColor:`${BgColor}`
                    }}
                >
                    <Icon/>
                    <h1>{Message}</h1>
                </div>
            </div>
        </>
    )
}
