/* global describe, it */

var expect = require('chai').expect;


describe('bixby-ldap', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('ldap');
      
      expect(json.assembly.components).to.have.length(5);
      expect(json.assembly.components).to.include('main');
      expect(json.assembly.components).to.include('classes/inetorgperson');
      expect(json.assembly.components).to.include('classes/organizationalperson');
      expect(json.assembly.components).to.include('classes/person');
      expect(json.assembly.components).to.include('classes/unix/posixaccount');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
