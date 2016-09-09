import { ConfigModule } from '../src/module';
import { merge } from 'lodash.merge';


let sandbox,
  configTest,
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
      configTest = new ConfigModule();
      return configTest.should.be.an('object');
    });

    it('should return an empty object if no config is passed', () => {
      configTest = new ConfigModule();
      return configTest.get().should.be.an('object');
    });

    it('should set configuration', () => {
      let config = { test: 'test' };
      configTest = new ConfigModule(config);
      return configTest.get().should.be.equal(config);
    });

  });

  describe('get', () => {

    it('should return configuration', () => {
      let config = { test: 'test' };
      configTest = new ConfigModule(config);
      return configTest.get().should.be.equal(config);
    });

  });

  describe('set', () => {

    it('should override configuration', () => {
      let config = { test: 'test' };
      configTest = new ConfigModule(config);
      let newconfig = { sure: 'thing' };
      configTest.set(newconfig);
      return configTest.get().should.be.equal(newconfig);
    });

  });

  describe('merge', () => {

    it('should override given configuration', () => {
      let config = { test: 'test', sure: 'thing' };
      configTest = new ConfigModule(config);
      let newconfig = { sure: 'okie' };
      configTest.merge(newconfig);
      configTest.get().sure.should.be.equal('okie');
      return configTest.get().test.should.be.equal('test');
    });

  });

});
