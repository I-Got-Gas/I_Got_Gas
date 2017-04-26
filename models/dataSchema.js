'use strict';
//May not need this because we are not saving into a db. But keep anyway
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
