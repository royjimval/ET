const express = require('express');
const Idorder = require('../models/id_order');
const router = express.Router();

router.get('/', async (req, res) => {
    const id = await Idorder.find();
    res.json(id);
});

router.post('/', async (req, res) => {
    const { order } = req.body;
    const id = new Idorder({ order });
    await id.save();
    res.json({ status: 'id Saved' });
}); 

router.put('/:id', async (req, res) => {
    console.log(req.body);
    const { order } = req.body;
    const new_order = { order };
    await Idorder.findByIdAndUpdate(req.params.id, new_order);
    res.json({ status: 'order update' });
});

module.exports = router;