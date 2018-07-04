const mongoose = require('mongoose');

// URL DATABASE CONNECTION
const databaserrl = 'mongodb://localhost/eatable'

mongoose.connect(databaserrl)
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err))

module.exports = mongoose;