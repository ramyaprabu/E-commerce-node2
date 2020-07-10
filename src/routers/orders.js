const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const CartItem = require('../models/cartItem');
const UserAddress = require('../models/userAddress');
const {neworder,getorder } = require('../controllers/order');

router.post('/create', neworder)
router.get('/getorders/:userId', getorder)

module.exports = router;