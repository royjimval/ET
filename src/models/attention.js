const mongoose = require('mongoose');
const { Schema } = mongoose;

const attention = new Schema({
	idtable: {type: String, required: true}
});


module.exports = mongoose.model('Attention', attention);
