import React, { useState, useEffect } from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';
import { Friend } from '../../../../components/User/Friend/Friend';
import { users } from '../../../../databases/users';
const Friends = ({userID}) => {
    const [Friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/user')
            .then(response =>{
                if(!response.ok){
                    throw new Error(`error! status: ${response}`)
                }
                return response.json();
            })
            .then(data =>{
                setFriends(data);
            })
            .catch(error =>{
                console.error(`Error fetching friends: error ${error}`)
            })
    }, [Friends])
    return (
        <main>
            <div className='Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>

                <div className='Main-Body primary-padding flex-center-center'>
                    {Friends.length > 0 ? (
                        Friends.map(friend =>(
                            <Friend 
                                key={friend.id} 
                                data={friend}
                            />
                        ))
                    ):(
                        <>
                            {users.map(friend =>(
                                <Friend 
                                    key={friend.id} 
                                    data={friend}
                                />
                            ))
                        }
                        </>
                    )
                    
                    }
                </div>
            </div>
        </main>
    )
}

export default Friends;
