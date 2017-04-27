'use strict';

(function(module){
  const gasView = {};
  const render = Handlebars.compile($('data-template').text());

  gasView.index = function(){
    console.log('inside index');
    $('#handlebars').append(gasStations.with('name').map(render));
    document.write('FUCKKSKJKFDJSKL');
  };


  module.gasView = gasView;
})(window);

gasStations.requestGasStations(gasView.index)
