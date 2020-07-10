const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');
const {getuser,signupadmin,loginadmin}=require('../controllers/admin')
router.get('/', getuser);
router.post('/signup', signupadmin);
router.post('/login', loginadmin);

module.exports = router;