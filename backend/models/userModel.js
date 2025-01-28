const db = require('../config/db');

const User = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, results) => {
            if (err) callback(err, null);
            callback(null, results);
        });
    },

    create: (newUser, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, newUser, (err, result) => {
            if (err) callback(err, null);
            callback(null, result);
        });
    },
    updateCoverImage: async (userId, imageUrl) => {
        try {
            const query = 'UPDATE users SET cover_picture = ? WHERE id = ?';
            const [result] = await db.query(query, [imageUrl, userId]);
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = User;
