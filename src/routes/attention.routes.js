const express = require('express');

const Attention = require('../models/attention');

const router = express.Router();


router.post('/', async (req, res) => {
    const { idtable } = req.body;
    const attention = new Attention({ idtable });
    await attention.save();
    res.json({ status: 'attention Saved' });
}); 

router.get('/', async (req, res) => {
    const attention = await Attention.find();
    res.json(attention);
}); 



router.delete('/:id', async (req, res) => {
    await Attention.findByIdAndRemove(req.params.id);
    res.json({ status: 'attention Deleted' });
}); 

module.exports = router;