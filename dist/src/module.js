"use strict";
const lodash = require('lodash');
class ConfigModule {
    constructor(...args) {
        this.config = {};
        this.defaults(...args);
    }
    get() {
        return this.config;
    }
    set(config) {
        return this.config = config || {};
    }
    merge(...args) {
        lodash.merge(this.config, ...args);
        return this.config;
    }
    defaults(...args) {
        lodash.defaultsDeep(this.config, ...args);
        return this.config;
    }
}
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=module.js.map