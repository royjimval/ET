

const mongoose = require('mongoose');
const { Schema } = mongoose;

const food = new Schema({
	name: {type: String, required: true},
	category: {type: String, required: true},
	price: {type: Number, required: true},
	ingredients:[[{type: String, required: true}]],
	extra:[[]],
	photo: { type: String, required: true }

});


module.exports = mongoose.model('Food', food);
