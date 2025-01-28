const db = require('../config/db');

// Get the last message for each conversation
exports.getLastMessages = (req, res) => {
    const userId = req.query.userId; // Assuming you're sending userId as a query parameter

    const query = `
        SELECT m1.id, m1.sender_id, m1.receiver_id, m1.content, m1.created_at, u1.username AS sender_username, u1.profile_picture AS sender_profile_picture, u2.username AS receiver_username, u2.profile_picture AS receiver_profile_picture
        FROM messages m1
        INNER JOIN (
            SELECT
                LEAST(sender_id, receiver_id) AS user1,
                GREATEST(sender_id, receiver_id) AS user2,
                MAX(created_at) AS last_message_time
            FROM messages
            GROUP BY user1, user2
        ) m2 ON
            LEAST(m1.sender_id, m1.receiver_id) = m2.user1 AND
            GREATEST(m1.sender_id, m1.receiver_id) = m2.user2 AND
            m1.created_at = m2.last_message_time
        JOIN users u1 ON m1.sender_id = u1.id
        JOIN users u2 ON m1.receiver_id = u2.id
        WHERE m1.sender_id = ? OR m1.receiver_id = ?
        ORDER BY m1.created_at DESC
    `;

    db.query(query, [userId, userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
