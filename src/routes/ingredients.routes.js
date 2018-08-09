const express = require('express');
const Ingredients = require('../models/ingredients');
const router = express.Router();


router.get('/', async (req, res) => {
    const ingredient = await Ingredients.find();
    res.json(ingredient);
}); 


module.exports = router;