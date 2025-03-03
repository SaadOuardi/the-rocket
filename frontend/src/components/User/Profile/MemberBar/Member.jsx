import React , { useState, useEffect } from 'react';
import { Cover } from '../../../../components/User/Profile/Account/Cover/Cover';
import { Profile } from '../../../../components/User/Profile/Account/Profile/Profile';
import { User } from '../../../../components/User/Profile/Account/User/User';
import { Bio } from '../../../../components/User/Profile/Account/Bio/Bio';
import { Navbar } from '../../../../components/User/Profile/Navbar/Navbar';
import ProfileImage from '../../../../assets/images/profile/Saad.jpg';
import CoverImage from '../../../../assets/images/cover/default-cover.png';

import './Member.scss';

export const Member = ({userID}) => {
    const [members, setMembers] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/user')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`error! status: ${response.status}`)
                }
                return response.json();
            })
            .then(data => {
                setMembers(data);
            })
            .catch(error => {
                console.error(`error fetching members ${error}`)
            })

    }, [])

    let currentUser = members.filter(member => member.id);


    return (
        <>
            {currentUser? (
                <div className='Member'>
                    <div className='Member-Content'>
                        <div className='Header'>
                            <div className='Profile-Cover'>
                                <Cover UserCover={currentUser.cover_picture || ''}/>
                                <div className='Profile-Pictire'>
                                    <Profile UserProfile={currentUser.profile_picture || ''}/>
                                </div>
                            </div>
                        </div>
                        <div className='Body'>
                            <User User={currentUser.first_name + " " + currentUser.last_name} UserUsername={currentUser.username}/>
                            <Bio Bio={currentUser.bio}/>
                        </div>
                        <div className='Footer'>
                            <div className='Footer-Content'>
                                <Navbar/>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div className='Member'>
                    <div className='Member-Content'>
                        <div className='Header'>
                            <div className='Profile-Cover'>
                                <Cover UserCover={CoverImage}/>
                                <div className='Profile-Pictire'>
                                    <Profile UserProfile={ProfileImage}/>
                                </div>
                            </div>
                        </div>
                        <div className='Body'>
                            <User User="Saad Ouardi" UserUsername="MrJoker"/>
                            <Bio Bio="We're built like that!"/>
                        </div>
                        <div className='Footer'>
                            <div className='Footer-Content'>
                                <Navbar/>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}