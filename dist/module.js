'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MMConfig = undefined;

var _lodash = require('lodash');

class MMConfig {

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
  }

}
exports.MMConfig = MMConfig;