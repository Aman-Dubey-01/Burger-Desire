const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, getUser, logoutUser } = require('../Controllers/authController');

router.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/user', getUser)
router.get('/logout', logoutUser)



module.exports = router;