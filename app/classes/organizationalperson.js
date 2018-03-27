// https://tools.ietf.org/html/rfc4519
exports = module.exports = function() {
  return require('../../lib/classes/organizationalperson');
}

exports['@implements'] = 'http://i.bixbyjs.org/x500/Class';
exports['@name'] = 'organizationalPerson';
exports['@oid'] = '2.5.6.7';
