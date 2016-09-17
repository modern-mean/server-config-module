'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigModule = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConfigModule {

  constructor(...args) {
    this.config = {};
    this.defaults(...args);
  }

  get() {
    return this.config;
  }

  set(config) {
    return this.config = config;
  }

  merge(...args) {
    _lodash2.default.merge(this.config, ...args);
    return this.config;
  }

  defaults(...args) {
    _lodash2.default.defaultsDeep(this.config || {}, ...args);
    return this.config;
  }

}
exports.ConfigModule = ConfigModule;