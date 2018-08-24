const express = require('express');
const moment = require('moment');

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

router.get('/dateft', async (req, res) => {
    console.log("JALA" + req.query.from)
    console.log("JALA" + req.query.to)

    var from = moment(req.query.from).toDate()
    var to = moment(req.query.to).toDate()

    from.setUTCHours(0)
    from.setMinutes(0)
    from.setSeconds(0)

    to.setUTCHours(23)
    to.setMinutes(59)
    to.setSeconds(59)

    console.log({from, to})

    const order = await Order.find({ date: { $gt: from, $lt: to } })
    console.log(order)
    res.json(order);
}); 

router.get('/date', async (req, res) => {

    console.log(req.query.date)
    var date = moment(req.query.date).toDate()

    date.setUTCHours(0)
    date.setMinutes(0)
    date.setSeconds(0)

    var gtDate = moment(date).toDate();

    gtDate.setUTCHours(23)
    gtDate.setMinutes(59)
    gtDate.setSeconds(59)

    var query = { "date": { $gte: date, $lt: gtDate } };
    const order = await Order.find(query)
    res.json(order);
}); 


module.exports = router;