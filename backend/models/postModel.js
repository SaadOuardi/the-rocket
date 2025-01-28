const db = require('../config/db');

const Post = {
    getAll: (callback) => {
        const sql = `
            SELECT posts.id, posts.content, posts.image_url, posts.created_at, 
                users.id AS user_id, users.username, users.first_name,users.last_name, users.profile_picture
            FROM posts
            JOIN users ON posts.user_id = users.id
            ORDER BY posts.created_at DESC`;
        db.query(sql, (err, results) => {
            if (err) callback(err, null);
            callback(null, results);
        });
    },

    getByUserId: (userId, callback) => {
        const sql = `
            SELECT posts.id, posts.content, posts.image_url, posts.created_at, 
                users.id AS user_id, users.username, users.first_name, users.last_name, users.profile_picture
            FROM posts
            JOIN users ON posts.user_id = users.id
            WHERE posts.user_id = ?
            ORDER BY posts.created_at DESC
        `;
        db.query(sql, [userId], (err, results) => {
            if (err) callback(err, null);
            callback(null, results);
        });
    },
    
    create: (newPost, callback) => {
        const { user_id, content, image_url } = newPost;
        const sql = `INSERT INTO posts (user_id, content, image_url) VALUES (?, ?, ?)`;
        db.query(sql, [user_id, content, image_url], (err, result) => {
            if (err) callback(err, null);
            callback(null, result.insertId);
        });
    },
    
    delete: (id, callback) => {
        const sql = `DELETE FROM posts WHERE id = ?`;
        db.query(sql, [id], (err, result) => {
            if (err) callback(err, null);
            callback(null, result);
        });
    }

};

module.exports = Post;
