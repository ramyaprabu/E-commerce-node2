const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Category=require('../models/category');

const getcategory=(req, res, next) => {

    Category.find({})
    .exec()
    .then(categories => {
        res.status(201).json({
            message: categories
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });

}
const newcategory=(req, res, next) => {

    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        slug: req.body.slug,
        parent: req.body.parent,
        createdAt: new Date(),
        createdBy: req.body.createdBy
    });

    category.save()
    .then(doc => {
        res.status(201).json({
            message: doc
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        })
    });

}
module.exports={
    getcategory,
    newcategory
}