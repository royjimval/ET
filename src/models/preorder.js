

const mongoose = require('mongoose');
const { Schema } = mongoose;

const preorder = new Schema({
	idtable: { type: String, required: true },
	name: {type: String, required: true},
	ingredients: [[{type: String, required: true}]],
	price: {type: Number, required: true},
	sended: {type: Boolean, required: true, default: false},
	finished: { type: Boolean, required: true, default: false},
	delivered: { type: Boolean, required: true, default : false },
	noOrder: { type: String, default:"0" }

});

module.exports = mongoose.model('Preorder', preorder);
