const express = require('express');
const Stock = require('../models/stock');
const router = express.Router();

router.get('/', async (req, res) => {
    const stock = await Stock.find();
    res.json(stock);
}); 

router.put('/:id', async (req, res) => {
    console.log(req.body);
    const { name, sellprice, stock, buyPrice } = req.body;
    const stockval = { name, sellprice, stock, buyPrice };
    await Stock.findByIdAndUpdate(id, stockval);
    res.json({ status: 'stock update' });
});

module.exports = router;