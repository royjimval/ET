

const mongoose = require('mongoose');
const { Schema } = mongoose;

const idorder = new Schema({
    order: { type: String},
});


module.exports = mongoose.model('id_order', idorder);
