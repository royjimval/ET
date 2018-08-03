const mongoose = require('mongoose');
const { Schema } = mongoose;

const order = new Schema({
	order: { type: String, require: true },
	total: { type: Number, required: true },
	date: { type: Date, default: Date.now }

});


module.exports = mongoose.model('Order', order);

