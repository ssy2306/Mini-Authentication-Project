const express = require('express');
const router = express.Router();

const loginUser = require('../controllers/users/loginUser.js');
const signUp = require('../controllers/users/signUp.js')
router.post('/login', loginUser);
router.post('/signup', signUp);

module.exports = router;