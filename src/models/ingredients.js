
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredients = new Schema({
	name: {type: String, required: true},
	Sellprice: {type: Number, required: true},
	stock: {type: Number, default: 0},
	buyPrice: {type: Number, default: 0}

});


module.exports = mongoose.model('Ingredients', ingredients);
