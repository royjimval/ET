const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.post('/', async (req, res) => {
    const { idtable, date, foods, start, finished, delivered } = req.body;
    const order = new Order({ idtable, date, foods, start, finished, delivered });
    console.log(order);
    await order.save();
    res.json({ status: 'order Saved' });
}); 

router.get('/', async (req, res) => {
    const order = await Order.find();
    console.log(order);
    res.json(order);
}); 

router.delete('/:id', async (req, res) => {
    await Order.findByIdAndRemove(req.params.id);
    res.json({ status: 'order Deleted' });
}); 



module.exports = router;