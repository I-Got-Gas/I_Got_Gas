'use strict';

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const serverError = require('debug')('igotgas:error');
const mongoose = require('mongoose');
const Promise = require('./public/lib/promise');

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dev');

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

/*remember to put in routes*/

app.use(morgan('dev'));
app.use(express.static('./public'));

/*app.use(routes*/

app.get('*', (req, res) => {
  res.sendfile('./public/views/index.html', { root: '.'});
});

app.use((err, req, res, next)=> {
  serverError(err);
  res.status(err.statusCode || 500).json(err.message);
  next();
});

app.listen(process.env.PORT || 3000, ()=> {
  console.log('Server up on ' + (process.env.PORT || 3000));
});