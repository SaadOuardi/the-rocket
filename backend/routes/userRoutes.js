const express = require('express');
const multer = require('multer');
const verifyToken = require('../middleware/authMiddleware');
const { getAllUsers, createUser, updateUserCover } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

// router.get('/', verifyToken, (req, res) => {
//     res.json({ message: 'Protected Route Accessed', user: req.user });
// });


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // This should now work
        cb(null, Date.now() + ext);
    }
});
const upload = multer({ storage });

router.post('/cover', upload.single('cover_picture'), updateUserCover);


module.exports = router;

