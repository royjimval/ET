const express = require('express');
const Ingredients = require('../models/ingredients');
const router = express.Router();


router.get('/', async (req, res) => {
    const ingredient = await Ingredients.find();
    res.json(ingredient);
}); 

router.post('/', async (req, res) => {
    console.log("llego")
    const { nameValue, SellpriceValue } = req.body;
    const ingredient = new Ingredients({ name: nameValue, Sellprice: SellpriceValue });
    await ingredient.save();
    res.json({ status: 'ingredient Saved' });
});


module.exports = router;