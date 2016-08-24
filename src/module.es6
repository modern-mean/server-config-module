'use strict';

import { merge } from 'lodash';

export class MMConfig {

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
  }

}
