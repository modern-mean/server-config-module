'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigModule = undefined;

var _lodash = require('lodash');

class ConfigModule {

  constructor(config) {
    this.config = config || {};
  }

  get() {
    return this.config;
  }

  set(config) {
    return this.config = config;
  }

  merge(config) {
    this.config = (0, _lodash.merge)(this.config, config);
    return this.config;
  }

}
exports.ConfigModule = ConfigModule;