const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authenticate  = require('../middleware/auth');

const User = require('../models/user');
const UserAddress = require('../models/userAddress');
const {createnewuser,
loginuser,
address,
getaddress}=require('../controllers/user')
router.post('/signup', createnewuser)
router.post('/login', loginuser)
router.post('/new-address', authenticate, address)
router.get('/get-addresses/:userId', authenticate, getaddress)

module.exports = router;