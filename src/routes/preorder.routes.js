const express = require('express');
const Preorder = require('../models/preorder');
const router = express.Router();

router.get('/', async (req, res) => {
    const preorder = await Preorder.find();
    console.log(preorder);
    res.json(preorder);
}); 

router.post('/', async (req, res) => {
    const { idorder, name, ingredients, price } = req.body;
    const preorder = new Preorder({ idorder, name, ingredients, price });
    console.log(preorder);
    await preorder.save();
    res.json({status: 'Preorder Saved'});
  });


module.exports = router;
