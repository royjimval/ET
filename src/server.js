const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());

//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//permisions for front
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));



// Routes
app.use('/api/eatable', require('../src/routes/menu.routes.js'));
app.use('/api/table', require('../src/routes/table.routes'));
app.use('/api/user', require('../src/routes/user.routes'));
app.use('/api/stock', require('../src/routes/stock.routes'));
app.use('/api/role', require('../src/routes/role.routes'));
app.use('/api/provider', require('../src/routes/provider.routes'));
app.use('/api/permission', require('../src/routes/permission.routes'));
app.use('/api/order', require('../src/routes/order.routes'));
app.use('/api/measure', require('../src/routes/measure.routes'));
app.use('/api/ingredients', require('../src/routes/ingredients.routes'));
app.use('/api/food', require('../src/routes/food.routes'));
app.use('/api/category', require('../src/routes/category.routes'));
app.use('/api/buys', require('../src/routes/buys.routes'));
app.use('/api/attention', require('../src/routes/attention.routes'));
app.use('/api/preorder', require('../src/routes/preorder.routes'));
app.use('/api/id_order', require('../src/routes/id_order.routes'));

//passport middleware
app.use(passport.initialize());

//passport config
require('../config/passport')(passport)

// Set CORS here
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

