"use strict";

var Null = function(uri, callback) {
  return setImmediate(callback);
};

Null.registerProtocols = function(tilelive) {
  tilelive.protocols["null:"] = Null;
};

Null.prototype.putTile = function(z, x, y, data, callback) {
  return setImmediate(callback);
};

Null.prototype.close = function(callback) {
  return setImmediate(callback);
};

module.exports = Null;

