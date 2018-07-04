const express = require('express');
const Provider = require('../models/provider');
const router = express.Router();

// router.post('/', async (req, res) => {
//     const { location, people } = req.body;
//     const table = new Table({ location, people });
//     console.log(table);
//     await table.save();
//     res.json({status: 'table Saved'});
//   });


module.exports = router;