const mongoose = require('mongoose');
const { Schema } = mongoose;

const order = new Schema({
	idtable: {type: String, required: true},
	date: { type: Date, default: Date.now },
	foods: {type: String, required: true},
	start: {type: Boolean, required: true},
	finished: {type: Boolean, required: true},
	delivered: {type: Boolean, required: true}
});


module.exports = mongoose.model('Order', order);

