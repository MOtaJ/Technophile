var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS (){
  GameConsole.call(this, 'Nintendo DS');
}

NintendoDS.prototype = Object.create(GameConsole.prototype)

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(NintendoDS, WebBrowser);
module.exports = NintendoDS;