const mongoose = require('mongoose');
const { Schema } = mongoose;

const permission = new Schema({
	description: String
});


module.exports = mongoose.model('Permission', permission);
