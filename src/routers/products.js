const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const Category = require('../models/category');
const authenticate = require('../middleware/auth');
const { newproduct,deleteproduct, getproduct,category,productslug } = require('../controllers/product');

router.post('/create', authenticate,newproduct );
router.delete('/:productId',deleteproduct)
router.get('/', getproduct);
router.get('/:categorySlug', category);
router.get('/:categorySlug/:productSlug', productslug);


module.exports = router;