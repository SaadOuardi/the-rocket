const express = require('express');
const router = express.Router();
const LikeController = require('../controllers/likeController');

// Route to get the like count for a specific post
router.get('/posts/:postId/likes', LikeController.getLikeCount);

// Route to add a like
router.post('/posts/:postId/likes', LikeController.addLike);

// Route to remove a like
router.delete('/posts/:postId/likes', LikeController.removeLike);

// Route to check if user liked the post
router.get('/posts/:postId/likes/check', LikeController.checkLike);

module.exports = router;

