import * as lodash from 'lodash';

export class ConfigModule {

  private config: Object;

  constructor(...args: any[]) {
    this.config = {};
    this.defaults(...args);

  }

  get() {
    return this.config;
  }

  set(config: Object) {
    return this.config = config || {};
  }

  merge(...args: any[]) {
    lodash.merge(this.config, ...args);
    return this.config;
  }

  defaults(...args: any[]) {
    lodash.defaultsDeep(this.config, ...args);
    return this.config;
  }

}
