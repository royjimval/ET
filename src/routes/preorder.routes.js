const express = require('express');
const Preorder = require('../models/preorder');
const router = express.Router();

router.get('/', async (req, res) => {
    const preorder = await Preorder.find();
    console.log(preorder);
    res.json(preorder);
}); 

router.get('/:idtable', async (req, res) => {
    const preorder = await Preorder.find({idtable: req.params.idtable, sended: true, finished: false})
    console.log(preorder);
    res.json(preorder);
}); 

router.get('/finished/:idtable', async (req, res) => {
    const preorder = await Preorder.find({ idtable: req.params.idtable, sended: true, finished: true })
    console.log(preorder);
    res.json(preorder);
}); 

router.post('/', async (req, res) => {
    const { idtable, name, ingredients, price, noOrder } = req.body;
    const preorder = new Preorder({ idtable, name, ingredients, price, noOrder });
    console.log(preorder);
    await preorder.save();
    res.json({status: 'Preorder Saved'});
  });

router.delete('/:id', async (req, res) => {
    await Preorder.findByIdAndRemove(req.params.id);
    res.json({ status: 'Preorder Deleted' });
}); 

router.put('/:id', async (req, res) => {
    const { idtable, name, ingredients, price, sended, start, finished, delivered, noOrder } = req.body;
    const preorder = { idtable, name, ingredients, price, sended, start, finished, delivered, noOrder };
    await Preorder.findByIdAndUpdate(req.params.id, preorder);
    res.json({ status: 'preorder update' });
});

module.exports = router;
