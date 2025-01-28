import React from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';


const MyGroups = ({userID}) => {
    return (
        <main>
            <div className='Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>

                <div className='Main-Body primary-padding flex-center-center'>
                    <h1>You haven't joined any groups yet.</h1>
                </div>
            </div>
        </main>
    )
}

export default MyGroups;
