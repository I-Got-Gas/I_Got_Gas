'use strict';
(function(module){
  const gasStations = {};

  gasStations.all = [];

  gasStations.requestGasStations = function(callback){
    $.ajax({
      url: `api.mygasfeed.com/stations/radius/47.6062/122.3321/5/distance/mopfko2t2i.json?callback=?`,
      type: GET
    })
    .then(data => gasStations.all = JSON.parse(data), err => console.error(err))
    .then(callback);
    console.log('Success Request');
  }

  gasStations.with = attr => gasStations.all.filter(repo => repo[attr]);

  module.gasStations = gasStations;
})(window);
