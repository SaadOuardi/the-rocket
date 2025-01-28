const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const path = require('path');
const socketIo = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const likeRoutes = require('./routes/likeRoutes');
const messagesRoutes = require('./routes/messageRoutes');

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const io = socketIO(server, {
    cors: {
        origin: 'http://localhost:3002',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
app.post('/api/messages/send', (req, res) => {
    const { message } = req.body;
    res.status(201).send({ success: true, message: 'Message sent!' });
});
// Define your API routes
app.get('/api/messages/:id1/:id2', (req, res) => {
    // Your logic to fetch messages
});
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api', likeRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});