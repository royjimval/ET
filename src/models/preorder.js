

const mongoose = require('mongoose');
const { Schema } = mongoose;

const preorder = new Schema({
	idorder: {type: String, required: true},
	foods: [[{type: String, required: true}]]
});

module.exports = mongoose.model('Preorder', preorder);
