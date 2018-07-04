const mongoose = require('mongoose');
const { Schema } = mongoose;

const provider = new Schema({
	name: {type: String, required: true},
	company: {type: String, required: true},
	phone: {type: Number, required: true},
	email: {type: String, required: true},
	ingredients:[[{type: String, required: true}]]
});


module.exports = mongoose.model('Provider', provider);
