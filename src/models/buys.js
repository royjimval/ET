

const mongoose = require('mongoose');
const { Schema } = mongoose;

const buys = new Schema({
	idprovider: {type: String, required: true},
	idingredients: {type: String, required: true},
	price: {type: Number, required: true},
	quantity: {type: Number, required: true},
	idmeasure: {type: String, required: true},
	total: {type: Number, required: true},
	date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Buys', buys);
