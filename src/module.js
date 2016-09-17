import lodash from 'lodash';

export class ConfigModule {

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
    lodash.merge(this.config, ...args);
    return this.config;
  }

  defaults(...args) {
    lodash.defaultsDeep(this.config || {}, ...args);
    return this.config;
  }

}
