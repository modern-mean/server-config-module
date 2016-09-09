import { merge } from 'lodash';

export class ConfigModule {

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
    this.config = merge(this.config, config);
    return this.config;
  }

}
