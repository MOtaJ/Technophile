var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber, systemName) {
  Phone.call(this, phoneNumber);
  this.systemName = 'Smart Phone';
}

SmartPhone.prototype = Object.create(Phone.prototype);

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;