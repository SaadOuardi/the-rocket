import { useState, useEffect } from 'react';
import { Sidebar } from '../../../components/User/Main/Sidebar/Sidebar';
import { Feed } from '../../../components/User/Home/Feed/Feed';
import { Post } from '../../../components/User/Home/Post/Post';
import { Subscribe } from '../../../components/User/Home/Subscribe/Subscribe';
import { Follow } from '../../../components/User/Home/Follow/Follow';
import { Trends } from '../../../components/User/Home/Trends/Trends';
import { users } from '../../../databases/users';
import { posts } from '../../../databases/posts';

import './Home.scss';

const Home = () => {
    const [data, setData] = useState([]);
    const filtered = users.filter(user => user.user_id === 5);
    console.log(filtered);

    const handleDeletePost = (postId) => {
        fetch(`http://localhost:5000/api/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setData(data.filter(feed => feed.id !== postId));
        })
        .catch(error => {
            console.error('Error deleting post:', error);
        });
    };
    
    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
    }, []);
    
    return (
        <main>
            <div className='side-1 sticky__container Primary-Padding'>
                <Sidebar/>
            </div>
            <div className='side-2'>
                <Post />
                {data.length > 0 ? (
                    data.map((data, index) => (
                        <Feed 
                            key={index} 
                            feed={data} 
                            onDelete={handleDeletePost}
                            userId='1' 
                        />
                    ))) : (
                        <>
                            {posts.map((data, index) => (
                                <Feed 
                                    key={index} 
                                    feed={data} 
                                    onDelete={handleDeletePost}
                                    userId={2}
                                />
                            ))}
                        </>
                    )
                }
            </div>
            <div className='side-3 column-gap__container sticky__container'>
                <Subscribe/>
                <Follow/>
                <Trends/>
            </div>
        </main>
    );
};

export default Home;