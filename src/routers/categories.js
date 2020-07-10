const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Category = require('../models/category');
const {getcategory,newcategory}=require('../controllers/categorie')
router.get('/',getcategory );
router.post('/create', newcategory);

module.exports = router;