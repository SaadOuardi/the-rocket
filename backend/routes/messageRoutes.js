const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/last-messages', messageController.getLastMessages);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const messagesController = require('../controllers/messageConroller');

// router.post('/send', messagesController.sendMessage);
// router.get('/:userId/:recipientId', (req, res) => {
//     // Logic to fetch messages
// });
// module.exports = router;
