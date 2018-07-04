

const mongoose = require('mongoose');
const { Schema } = mongoose;

const category = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	photo:{ data: Buffer, contentType: String },
	dateadded: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Category', category);
