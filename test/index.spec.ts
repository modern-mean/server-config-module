import * as test from 'blue-tape';
import * as indexTest from '../src/index';

test('export test', (assert) => {
  assert.plan(1);
  
  assert.notEqual(indexTest.ConfigModule, undefined, 'Should not be undefined');

});