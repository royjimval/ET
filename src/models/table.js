const mongoose = require('mongoose');
const { Schema } = mongoose;

const table = new Schema({
	location: {type: String, required: true},
	people: {type: Number, required: true}
});

module.exports = mongoose.model('Table', table);
