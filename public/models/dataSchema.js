'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  stations : [
    {
      city : String,
      reg_price : String,
      mid_price : String,
      pre_price : String,
      diesel : String,
      address : String,
      lat : String,
      lng : String,
      station : String,
      distance : String
    }
  ]
});

module.exports = mongoose.model('GasStation', dataSchema);
