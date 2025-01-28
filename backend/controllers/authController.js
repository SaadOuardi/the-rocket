const db = require('../config/db');
const bcrypt = require('bcrypt');

const loginUser = (req, res) => {
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const { email, password } = req.body;
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            return res.status(500).json({ message: 'Server error' });
        }
        console.log('Query Results:', results);
        if (results.length > 0) {
            const user = results[0];
            console.log('User found:', user);
            res.status(200).json({ data: 'sample_token', userType: user.userType, userId: user.id });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
};
const signupUser = (req, res) => {
    const { firstname, lastname, username, email, password, profile_picture, cover_picture, bio, userType } = req.body;
    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err.message);
            return res.status(500).json({ message: 'Server error' });
        }
        const query = 'INSERT INTO users (first_name, last_name, username, email, password, profile_picture, cover_picture, bio, userType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [firstname, lastname, username, email, hashedPassword, profile_picture, cover_picture, bio, userType], (err, results) => {
            if (err) {
                console.error('Error inserting user into the database:', err.message);
                return res.status(500).json({ message: 'Server error' });
            }
            console.log('User inserted:', results);
            // Fetch the user after insertion to return user details
            const selectQuery = 'SELECT id, userType FROM users WHERE email = ?';
            db.query(selectQuery, [email], (err, results) => {
                if (err) {
                    console.error('Error querying the database:', err.message);
                    return res.status(500).json({ message: 'Server error' });
                }
                if (results.length > 0) {
                    const user = results[0];
                    res.status(201).json({ data: 'sample_token', userType: user.userType, userId: user.id });
                } else {
                    console.error('User not found after insertion');
                    res.status(500).json({ message: 'User creation failed' });
                }
            });
        });
    });
};
module.exports = { loginUser, signupUser };