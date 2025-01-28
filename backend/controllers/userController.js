const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/userModel');

const getUserProfile = (req, res) => {
    const userId = req.user.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            return res.status(500).json({ message: 'Server error' });
        }
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
};

const getAllUsers = (req, res) => {
    User.getAll((err, users) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(users);
    });
};

const createUser = (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profile_picture: req.body.profile_picture,
        bio: req.body.bio
    };
    User.create(newUser, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User created successfully!', userId: result.insertId });
    });
};

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/'); // Directory where files will be uploaded
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); // Rename file with timestamp to avoid collisions
    }
});
const upload = multer({ storage });

// Function to update user's cover image
const updateUserCover = async (req, res) => {
    const userId = req.params.userId;
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    try {
        // Logic to save file path to database (example assumes file path is stored in uploads directory)
        const imageUrl = '/uploads/' + file.filename;
        // Update user's cover image in the database
        await User.updateCoverImage(userId, imageUrl);
        res.status(200).json({ message: 'Cover image updated successfully', imageUrl });
    } catch (error) {
        console.error('Error updating cover image:', error);
        res.status(500).json({ error: 'Failed to update cover image' });
    }
};

module.exports = { getAllUsers, createUser , getUserProfile , updateUserCover };
