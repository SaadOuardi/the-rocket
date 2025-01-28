import { useState } from 'react';
import { Alert } from '../../../../lightboxes/Alert/Alert';
import './Subscribe.scss';

const IconError = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>
    )
}
export const Subscribe = () =>{
    const [Error,setError] = useState(false);
    const handleError = () =>{
        setError(!Error);
        setTimeout(() => {
            setError(false);
        }, 4000);
    }
    return(
        <>
            <div className="Subscribe container">
                <div className="container__content">
                    <h2>Subscribe to Premium</h2>
                    <p>
                        Subscribe to unlock new features and if
                        eligible, receive a share of ads revenue.
                    </p>

                    <button className="subscribe-btn" onClick={handleError}>Subscribe</button>
                    {Error && 
                        <Alert Icon={IconError} Message='This functionality is currently not available. Please check back later.' BgColor='red'/>
                    }
                </div>
            </div>
        </>
    )
}