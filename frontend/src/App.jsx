import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from './components/Authentication/UserContext/UserProvider';
import { Header } from './components/User/Main/Header/Header';
import { Navbar } from './components/User/Main/Navbar/Navbar';
// Athentication Pages //
import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';
import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';
// Public Pages //
import AboutPublic from './pages/Public/About/About';
import Contact from './pages/Public/Contact/Contact';
import Policy from './pages/Public/Policy/Policy';
// User Pages //
import Home from './pages/User/Home/Home';
import Friends from './pages/User/Friends/Friends';
import Messages from './pages/User/Messages/Messages';
import Chats from './pages/User/Chats/Chats';
import Notifications from './pages/User/Notifications/Notifications';
import Trends from './pages/User/Trends/Trends';
import Groups from './pages/User/Groups/Groups';
import Reels from './pages/User/Reels/Reels';
import Saved from './pages/User/Saved/Saved';
import Account from './pages/User/Profile/Account/Account';
import Member from './pages/User/Profile/Member/Member';
import About from './pages/User/Profile/About/About';
import MyFriends from './pages/User/Profile/Friends/Friends';
import Photos from './pages/User/Profile/Photos/Photos';
import Videos from './pages/User/Profile/Videos/Videos';
import Posts from './pages/User/Profile/Posts/Posts';
import MyReels from './pages/User/Profile/Reels/Reels';
import MyGroups from './pages/User/Profile/Groups/Groups';
import Settings from './pages/User/Settings/Settings';
// Admin Pages//
import Admin from './pages/Admin/Admin';
// Error Pages //

const App = () => {
    window.localStorage.setItem('windowMode',"Dark");

    return (
        <UserProvider>
            <Router>
                <Header/>
                <div className='side-0'>
                    <Navbar/>
                </div>
                <Switch>
                    {/* Authentication */}
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={Signup}/>
                    {/* Public Pages */}
                    <Route path='/about' exact component={AboutPublic}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/policy" exact component={Policy}/>
                    {/* User Pages */}
                    <Route path="/" exact component={Home} />
                    <Route path="/friends" exact component={Friends}/>
                    <Route path="/trends" exact component={Trends}/>
                    <Route path="/messages" exact component={Messages}/>
                    <Route path="/chats" exact component={Chats}/>
                    <Route path="/notifications" exact component={Notifications}/>
                    <Route path="/groups" exact component={Groups}  />
                    <Route path="/reels" exact component={Reels}/>
                    <Route path="/saved" exact component={Saved}/>
                    {/* Profile Pages */}
                    <Route path="/:member?" exact component={Account} />
                    <Route path="/profile/about" exact component={About}/>
                    <Route path="/profile/friends" exact component={MyFriends}/>
                    <Route path="/profile/photos" exact component={Photos}/>
                    <Route path="/profile/videos" exact component={Videos}/>
                    <Route path="/profile/posts" exact component={Posts}/>
                    <Route path="/profile/reels" exact component={MyReels}/>
                    <Route path="/profile/groups" exact component={MyGroups}/>
                    <Route path="/settings" exact component={Settings} />
                    
                    {/* Admin Pages */}
                    <Route path='/admin' exact component={Admin}/>
                    <Route render={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </UserProvider>
    );
};

export default App;