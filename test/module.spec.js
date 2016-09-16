import { ConfigModule } from '../src/module';
import lodash from 'lodash';


let sandbox,
  moduleTest,
  config;

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
