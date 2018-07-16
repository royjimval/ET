const express = require('express');
const Category = require('../models/category');
const router = express.Router();

router.get('/', async (req, res) => {
    const category = await Category.find();
    console.log(category);
    res.json(category);
}); 

router.post('/', async (req, res) => {
    const { name, description, photo, dateadded } = req.body;
    const category = new Category({ name, description, photo, dateadded });
    console.log(category);
    await category.save();
    res.json({ status: 'Category Saved' });
}); 
module.exports = router;