const LikeModel = require('../models/likeModel');

const LikeController = {
    getLikeCount: async (req, res) => {
        const { postId } = req.params;

        try {
            const likeCount = await LikeModel.getLikeCount(postId);
            res.status(200).json({ likeCount });
        } catch (error) {
            console.error(`Error getting like count: ${error.message}`);
            res.status(500).json({ message: 'Failed to get like count from the database' });
        }
    },
    // Add a like to a post
    addLike: async (req, res) => {
        const { postId } = req.params;
        const { userId } = req.body;
    
        try {
            const alreadyLiked = await LikeModel.userLikedPost(postId, userId);
            
            if (alreadyLiked) {
                // User has already liked the post, so remove the like (unlike)
                await LikeModel.removeLike(postId, userId);
                return res.status(200).json({ message: 'Like removed successfully' });
            } else {
                // User has not liked the post, so add the like
                await LikeModel.createLike(postId, userId);
                return res.status(201).json({ message: 'Like added successfully' });
            }
        } catch (error) {
            console.error('Error toggling like:', error);
            res.status(500).json({ message: 'Server error' });
        }
    },
    // Remove a like from a post
    removeLike: async (req, res) => {
        const { postId } = req.params;
        const { userId } = req.body;

        try {
            await LikeModel.removeLike(postId, userId);
            res.status(200).json({ message: 'Like removed successfully' });
        } catch (error) {
            console.error('Error removing like:', error);
            res.status(500).json({ message: 'Server error' });
        }
    },
    checkLike: async (req, res) => {
        const { postId } = req.params;
        const { userId } = req.query; 
    
        try {
            const liked = await LikeModel.userLikedPost(postId, userId);
            res.status(200).json({ liked });
        } catch (error) {
            console.error('Error checking if post is liked:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

module.exports = LikeController;