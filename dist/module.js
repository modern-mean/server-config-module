'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigModule = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConfigModule {

  constructor(config) {
    this.config = {};
    this.defaults(config);
  }

  get() {
    return this.config;
  }

  set(config) {
    return this.config = config;
  }

  merge(config) {
    _lodash2.default.merge(this.config, config);
    return this.config;
  }

  defaults(config) {
    _lodash2.default.defaultsDeep(this.config || {}, config);
    return this.config;
  }

}
exports.ConfigModule = ConfigModule;