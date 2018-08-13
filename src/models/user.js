const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {type: String, required: true},
	lastname: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String,trim: true,lowercase: true,required: true},
	role: {type: String, required: true},
	permissions:[{type: String, required: true}]
});

module.exports = User = mongoose.model('users', UserSchema);
