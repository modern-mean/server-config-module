"use strict";
const test = require('blue-tape');
const indexTest = require('../src/index');
test('export test', (assert) => {
    assert.plan(1);
    assert.notEqual(indexTest.ConfigModule, undefined, 'Should not be undefined');
});
//# sourceMappingURL=index.spec.js.map