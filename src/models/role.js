const mongoose = require('mongoose');
const { Schema } = mongoose;

const role = new Schema({
	rolename: {type: String, required: true},
	description: {type: String, required: true}
});

module.exports = mongoose.model('Role', role);
