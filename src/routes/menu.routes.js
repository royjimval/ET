const express = require('express');
const router = express.Router();

const Product = require('../models/eatable');

router.get('/', async (req, res) => {
    const products = await Product.find();
    console.log(products);
    res.json(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
})

router.post('/', async (req, res) => {
    const { title, description, price } = req.body;
    const product = new Product({title, description, price});
    console.log(product);
    await product.save();
    res.json({status: 'Task Saved'});
  });

  router.put('/:id', async (req, res) => {
    const { title, description, price } = req.body;
    const newTask = {title, description, price};
    await Product.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
    // console.log(req.params.id);
    // res.json('recieved');
  });

  router.delete('/:id', async (req, res) => {
      await Product.findByIdAndRemove(req.params.id);
      res.json({status: 'Task Deleted'});
  });

  router.post('/', async (req, res) => {
    const { location, people } = req.body;
    const table = new Product({location, people});
    console.log(table);
    await table.save();
    res.json({status: 'Task Saved'});
  });

  module.exports = router;