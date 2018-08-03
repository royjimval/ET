const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.post('/', async (req, res) => {
    const { new_id, total } = req.body;
    console.log("From Routes " + new_id)
    const new_order = new Order({ order: new_id, total });
    await new_order.save();
    res.json({ status: 'order Saved' });
}); 

router.get('/', async (req, res) => {
    const order = await Order.find();
    res.json(order);
}); 



module.exports = router;