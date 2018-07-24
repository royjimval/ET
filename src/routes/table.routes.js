const express = require('express');
const Table = require('../models/table');
const router = express.Router();

router.post('/', async (req, res) => {
    const { location, people } = req.body;
    const table = new Table({ location, people });
    await table.save();
    res.json({status: 'table Saved'});
  });


module.exports = router;