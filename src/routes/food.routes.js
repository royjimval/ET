const express = require('express');
const Food = require('../models/food');
const router = express.Router();

router.get('/', async (req, res) => {
    const food = await Food.find();
    console.log(food);
    res.json(food);
}); 

router.post('/', async (req, res) => {
    const { name, category, price, ingredients, extra, photo } = req.body;
    const food = new Food({ name, category, price, ingredients, extra, photo });
    console.log(food);
    await food.save();
    res.json({status: 'food Saved'});
  });


module.exports = router;