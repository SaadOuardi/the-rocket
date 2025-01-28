import React, { useState , useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';
import { Feed } from '../../../../components/User/Home/Feed/Feed';
import './Account.scss';

const Account = () => {
    const [accountData, setAccountData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/user/1`)
            .then(results => {
                if (!results.ok) {
                    throw new Error(`error! result: ${results}`)
                }
                return results.json();
            })
            .then(data => {
                setAccountData(data);
            })
            .catch(error => {
                console.error(`error fetching member data ${error}`)
            })
    }, []);

    return (
        <main>
            <div className='Member-Content Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member />
                </div>
                <div className='Main-Body Flex-Center Primary-Padding'>
                    {accountData.map(feed => (
                            <Feed key={feed.id} feed={feed} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
export default Account;