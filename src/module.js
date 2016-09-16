import lodash from 'lodash';

export class ConfigModule {

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
    lodash.merge(this.config, config);
    return this.config;
  }

  defaults(config) {
    lodash.defaultsDeep(this.config || {}, config);
    return this.config;
  }

}
