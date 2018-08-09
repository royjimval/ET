const express = require('express');
const Preorder = require('../models/preorder');
const router = express.Router();

router.get('/order/:idtable', async (req, res) => {
    const preorder = await Preorder.find({idtable: req.params.idtable, noOrder:"0"});
    res.json(preorder);
}); 

router.get('/:idtable', async (req, res) => {
    const preorder = await Preorder.find({idtable: req.params.idtable, sended: true, finished: false})
    res.json(preorder);
}); 

router.get('/finished/:idtable', async (req, res) => {
    const preorder = await Preorder.find({ idtable: req.params.idtable, sended: true, finished: true, delivered:false })
    res.json(preorder);
}); 

router.get('/finished/delivered/:idtable', async (req, res) => {
    const preorder = await Preorder.find({ idtable: req.params.idtable, sended: true, finished: true, delivered: true, noOrder: "0" })
    res.json(preorder);
}); 

router.get('/Cashier/:idtable', async (req, res) => {
    const preorder = await Preorder.find({ idtable: req.params.idtable, sended: true,  noOrder:"0" })
    res.json(preorder);
}); 

router.post('/', async (req, res) => {
    const { idtable, name, ingredients, price, noOrder } = req.body;
    const preorder = new Preorder({ idtable, name, ingredients, price, noOrder });
    await preorder.save();
    res.json({status: 'Preorder Saved'});
  });

router.delete('/:id', async (req, res) => {
    await Preorder.findByIdAndRemove(req.params.id);
    res.json({ status: 'Preorder Deleted' });
}); 

router.put('/:id', async (req, res) => {
    console.log(req.body);
    const { idtable, name, ingredients, price, sended, start, finished, delivered, noOrder } = req.body;
    const preorder = { idtable, name, ingredients, price, sended, start, finished, delivered, noOrder };
    await Preorder.findByIdAndUpdate(req.params.id, preorder);
    res.json({ status: 'preorder update' });
});


module.exports = router;
