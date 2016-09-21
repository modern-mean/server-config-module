import * as test from 'blue-tape';
import * as sinon from 'sinon';
import { ConfigModule } from '../src/module';
import * as lodash from 'lodash';



test('constructor with no args', (assert) => {
  let moduleTest = new ConfigModule();
  assert.notEqual(moduleTest.get(), undefined, 'get should return undefined');
  assert.end();
});

test('constructor with args', (assert) => {
  let sandbox = sinon.sandbox.create();
  let spy = sandbox.spy(lodash, 'defaultsDeep');
  let config = { test: { okie: 'dokie' } };
  let moduleTest = new ConfigModule(config);
  assert.deepLooseEqual(moduleTest.get(), config, 'should return config');
  assert.equal(spy.called, true, 'should call lodash.defaultsDeep');
  sandbox.restore();
  assert.end();
});

test('set method', (assert) => {
  let config = { test: { okie: 'dokie' } };
  let config2 = { test: 'sweet' };
  let moduleTest = new ConfigModule(config);
  moduleTest.set(config2);
  assert.equal(moduleTest.get(), config2, 'should override config');
  assert.end();
});

test('merge method', (assert) => {
  let sandbox = sinon.sandbox.create();
  let spy = sandbox.spy(lodash, 'merge');
  let config = { test: { okie: 'dokie' } };
  let config2 = { test: 'sweet' };
  let config3 = { test: 'sure' };
  let moduleTest = new ConfigModule(config);
  moduleTest.merge(config2, config3);
  assert.equal(spy.called, true, 'should call lodash merge');
  assert.deepLooseEqual(spy.args[0][0], moduleTest.get(), 'should call lodash merge with first argument previous config');
  assert.deepLooseEqual(spy.args[0][1], config2, 'should call lodash merge with second argument config2');
  assert.deepLooseEqual(spy.args[0][2], config3, 'should call lodash merge with second argument config3');
  sandbox.restore();
  assert.end();
});


  /*

describe('/src/config.js', () => {

  beforeEach(() => {
    return sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    return sandbox.restore();
  });

  describe('constructor', () => {

    it('should return an object', () => {
      moduleTest = new ConfigModule();
      return moduleTest.should.be.an('object');
    });

    it('should initialize as empty object if no config is passed', () => {
      moduleTest = new ConfigModule();
      return Object.keys(moduleTest.get()).length.should.be.equal(0);
    });

    it('should call defaults', () => {
      let defaultSpy = sandbox.spy(lodash, 'defaultsDeep');
      let config = { test: 'test' };
      moduleTest = new ConfigModule(config);
      return defaultSpy.should.be.called;
    });

  });

  describe('get', () => {

    it('should return configuration', () => {
      config = { test: 'test' };
      moduleTest = new ConfigModule(config);
      return moduleTest.get().test.should.be.equal('test');
    });

  });

  describe('set', () => {

    it('should override configuration', () => {
      let config = { test: 'test' };
      moduleTest = new ConfigModule(config);
      let newconfig = { sure: 'thing' };
      moduleTest.set(newconfig);
      return moduleTest.get().should.be.equal(newconfig);
    });

  });

  describe('merge', () => {

    beforeEach(() => {
      config = { test: 'test', sure: 'thing' };
      moduleTest = new ConfigModule(config);
    });

    it('should call lodash merge', () => {
      let mergeSpy = sandbox.spy(lodash, 'merge');
      let newconfig = { sure: 'okie' };
      moduleTest.merge(newconfig);
      return mergeSpy.should.have.been.calledWith(moduleTest.get(), newconfig);
    });

  });

  describe('defaults', () => {

    beforeEach(() => {
      config = { test: 'test', sure: 'thing' };
      moduleTest = new ConfigModule(config);
    });

    it('should call lodash defaults', () => {
      let defaultSpy = sandbox.spy(lodash, 'defaultsDeep');
      let newconfig = { sure: 'okie' };
      moduleTest.defaults(newconfig);
      return defaultSpy.should.have.been.calledWith(config, newconfig);
    });

  });

});

*/
