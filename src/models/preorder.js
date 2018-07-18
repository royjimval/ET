

const mongoose = require('mongoose');
const { Schema } = mongoose;

const preorder = new Schema({
	idorder: {type: String, required: true},
	name: {type: String, required: true},
	ingredients: [[{type: String, required: true}]],
	price: {type: Number, required: true},

});

module.exports = mongoose.model('Preorder', preorder);
