import React, { useState, useEffect }from 'react';
import { Navbar } from '../../../components/User/Main/Navbar/Navbar';
import { Sidebar } from '../../../components/User/Main/Sidebar/Sidebar';
import { Friend } from '../../../components/User/Friend/Friend';
import { Subscribe } from '../../../components/User/Home/Subscribe/Subscribe';
import { Follow } from '../../../components/User/Home/Follow/Follow';
import { Trends } from '../../../components/User/Home/Trends/Trends';

const Friends = () => {

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
            <div className='side-1 sticky__container'>
                <Sidebar/>
            </div>
            <div className='side-2'>
                <div className='Flex-Center Flex-Wrap'>
                    {Friends.map(friend =>(
                        <Friend key={friend.id} data={friend}/>
                    ))}
                </div>
            </div>
            <div className='side-3 column-gap__container sticky__container'>
                <Subscribe/>
                <Follow/>
                <Trends/>
            </div>
        </main>
    )
}

export default Friends
