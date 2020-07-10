const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const CartItem = require('../models/cartItem');
const { additem,userid,quantity } = require('../controllers/Cartitem');


router.post('/add', additem);
router.post('/user/:userId', userid);
router.put('/update/quantity', quantity);

module.exports = router;