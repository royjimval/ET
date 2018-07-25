const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
	name: {type: String, required: true},
	lastname: {type: String, required: true},
	password: {type: String, required: true},
	email: {
        	type: String,
        	trim: true,
        	lowercase: true,
        	unique: true,
        	required: 'Email address is required',
        	match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    	},
	role: {type: String, required: true},
	permissions:[[{type: String, required: true}]],
	status:{type: Boolean, required: true}	
});

module.exports = mongoose.model('User', user);
