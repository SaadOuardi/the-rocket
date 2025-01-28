const db = require('../config/db');

const LikeModel = {
    // Get like
    getLikeCount: (postId) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT COUNT(*) AS likeCount FROM likes WHERE post_id = ?`;
            db.query(query, [postId], (error, results) => {
                if (error) {
                    console.error(`Error executing query: ${error.message}`);
                    return reject(new Error('Failed to get like count from the database'));
                }

                if (Array.isArray(results) && results.length > 0) {
                    const likeCount = Number(results[0].likeCount);
                    return resolve(isNaN(likeCount) ? 0 : likeCount);
                }

                return resolve(0); // Return 0 if no rows are found
            });
        });
    },
    // Create a new like
    createLike: async (postId, userId) => {
        const query = `INSERT INTO likes (post_id, user_id, created_at) VALUES (?, ?, NOW())`;
        try {
            await db.query(query, [postId, userId]);
            return { success: true };
        } catch (error) {
            console.error('Error creating like:', error);
            throw new Error('Database error');
        }
    },
    // Remove a like
    removeLike: async (postId, userId) => {
        const query = `DELETE FROM likes WHERE post_id = ? AND user_id = ?`;
        try {
            await db.query(query, [postId, userId]);
            return { success: true };
        } catch (error) {
            console.error('Error removing like:', error);
            throw new Error('Database error');
        }
    },
    // Check if a user has already liked a post
    userLikedPost: (postId, userId) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT COUNT(*) AS liked FROM likes WHERE post_id = ? AND user_id = ?`;
            db.query(query, [postId, userId], (error, results) => {
                if (error) {
                    console.error(`Error executing query: ${error.message}`);
                    return reject(new Error('Failed to check if user liked the post from the database'));
                }

                if (Array.isArray(results) && results.length > 0) {
                    const liked = Number(results[0].liked);
                    return resolve(liked > 0); // Return true if liked > 0, false otherwise
                }

                return resolve(false); // Return false if no rows are found
            });
        });
    },

};

module.exports = LikeModel;