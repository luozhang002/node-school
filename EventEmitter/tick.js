var util = require('util')
var EventEmitter = require('events').EventEmitter;
var Tick = function() {
  var self = this;
  setInterval(function(){
    self.emit('tick')
  }, 1000);
}

util.inherits(Tick,EventEmitter)

var ticker = new Tick();

ticker.on('tick',function(){
  console.log('tick')
})