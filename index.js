'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./dist/logger');

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});