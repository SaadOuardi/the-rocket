const Post = require('../models/postModel');

const getAllPosts = (req, res) => {
    Post.getAll((err, posts) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(posts);
    });
};

const getPostsByUser = (req, res) => {
    const userId = req.params.userId; // Get the userId from request parameters
    Post.getByUserId(userId, (err, posts) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(posts);
    });
};


const createPost = (req, res) => {
    const { user_id, content } = req.body;
    const image_url = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null;
    const newPost = { user_id, content, image_url };

    Post.create(newPost, (err, postId) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: postId, ...newPost });
    });
};

const deletePost = (req, res) => {
    const postId = req.params.id;
    Post.delete(postId, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Post deleted successfully' });
    });
};

module.exports = { getAllPosts, getPostsByUser, createPost, deletePost  };