// authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = verifyToken;
