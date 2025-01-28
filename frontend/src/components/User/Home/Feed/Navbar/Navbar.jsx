import React from 'react';
import { Like } from './Like/Like';
import { Comment } from './Comment/Comment';
import { Repost } from './Repost/Repost';
import { View } from './View/View';
import { Save } from './Save/Save';
import { Share } from './Share/Share';
import './Navbar.scss';

export const Navbar = ({ likeCount, postId, userId }) => {
    return (
        <div className="feed-navbar">
            <div className="feed-navbar-container">
                <Like likeCount={likeCount} postId={postId} userId={userId} />
                <Comment />
                <Save />
                <Share />
            </div>
        </div>
    );
};