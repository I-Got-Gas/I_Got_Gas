'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const serverError = require('debug')('igotgas:error');
const mongoose = require('mongoose');
const Promise = require('./public/lib/promise');

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dev');

/*remember to put in routes*/

app.use(morgan('dev')); 

/*app.use(routes*/

app.use((err, req, res, next)=> {
  serverError(err);
  res.status(err.statusCode || 500).json(err.message);
  next();
});

app.listen(process.env.PORT || 3000, ()=> {
  console.log('Server up on ' + (process.env.PORT || 3000));
});