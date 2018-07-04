const express = require('express');
const Role = require('../models/role');
const router = express.Router();

router.post('/', async (req, res) => {
    const { rolename, description } = req.body;
    const role = new Role({ rolename, description });
    console.log(role);
    await role.save();
    res.json({status: 'role Saved'});
  });


module.exports = router;