import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../../components/Authentication/UserContext/UserProvider';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';
import { Feed } from '../../../../components/User/Home/Feed/Feed';

const Posts = ({userID}) => {
    const { user } = useContext(UserContext);
    const [accountData, setAccountData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/user/${user.userId}`)
            .then(results =>{
                if(!results.ok){
                    throw new Error(`error! result: ${results}`)
                }
                return results.json();
            })
            .then(data =>{
                setAccountData(data);
            })
            .catch(error =>{
                console.error(`error fetching member data ${error}`)
            })
    }, [user.userId]);

    return (
        <main>
            <div className='Member-Content Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member />
                </div>
                <div className='Main-Body Flex-Center Primary-Padding'>
                    {accountData.length > 0 ?
                        accountData.map(feed => (
                            <Feed key={feed.id} feed={feed} />
                        ))
                    : (
                        <div className='Main-Body primary-padding flex-center-center'>
                            <h1>You haven't posted any posts yet.</h1>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Posts;