const mongoose = require('mongoose');
const { Schema } = mongoose;

const stock = new Schema({
	idingredients: {type: String, required: true},
	idmeasure: {type: String, required: true},
	max: {type: Number, required: true},
	min: {type: Number, required: true},
	quantity: {type: Number, required: true},
	lastupdateddate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stock', stock);
