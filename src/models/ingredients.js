
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredients = new Schema({
	name: {type: String, required: true}
});


module.exports = mongoose.model('Ingredients', ingredients);
