const mongoose = require('mongoose');
const { Schema } = mongoose;

const order = new Schema({
	date: { type: Date, default: Date.now },
	total: { type: Number, required: true }

});


module.exports = mongoose.model('Order', order);

