const mongoose = require('mongoose');
const { Schema } = mongoose;

const measure = new Schema({
	name: {type: String, required: true}
});

module.exports = mongoose.model('Measure', measure);
