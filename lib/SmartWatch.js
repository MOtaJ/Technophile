var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch() {
  Watch.call(this);
}

SmartWatch.prototype = Object.create(Watch.prototype);

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(Watch, Tablet);

module.exports = SmartWatch;