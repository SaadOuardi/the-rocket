const db = require('../config/db');

const Comment = {
    create: (newComment, callback) => {
        const sql = 'INSERT INTO comments SET ?';
        db.query(sql, newComment, (err, result) => {
            if (err) callback(err, null);
            callback(null, result);
        });
    },
};

module.exports = Comment;
