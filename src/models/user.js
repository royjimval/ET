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
        	// validate: [validateEmail, 'Please fill a valid email address'],
        	match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    	},
	role: {type: String, required: true},
	permissions:[[{type: String, required: true}]],
	status:{type: Boolean, required: true}	
});

// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };


module.exports = mongoose.model('User', user);
