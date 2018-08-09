const express = require('express');
const Food = require('../models/food');
const router = express.Router();

router.get('/', async (req, res) => {
    const food = await Food.find();
    res.json(food);
}); 


router.get('/Breakfast', async (req, res) => {
    const food = await Food.find({'category':"Breakfast"})
    res.json(food);
});

router.get('/Meal', async (req, res) => {
    const food = await Food.find({ 'category': "Meal" })
    res.json(food);
}); 

router.get('/Dinner', async (req, res) => {
    const food = await Food.find({ 'category': "Dinner" })
    res.json(food);
}); 

router.get('/Drink', async (req, res) => {
    const food = await Food.find({ 'category': "Drink" })
    res.json(food);
}); 

router.get('/Dessert', async (req, res) => {
    const food = await Food.find({ 'category': "Dessert" })
    res.json(food);
});

router.post('/', async (req, res) => {
    const { nameValue, categoryValue, priceValue, checkedCheckboxesValuesIngredients, checkedCheckboxesValuesExtra, photoValue } = req.body;
    const food = new Food({ name:nameValue, category:categoryValue, price:priceValue, ingredients:checkedCheckboxesValuesIngredients, extra:checkedCheckboxesValuesExtra, photo:photoValue });
    await food.save();
    res.json({status: 'food Saved'});
  });


module.exports = router;