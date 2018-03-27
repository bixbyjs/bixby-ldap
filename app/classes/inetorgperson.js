// https://tools.ietf.org/html/rfc2798
exports = module.exports = function() {
  return require('../../lib/classes/inetorgperson');
}

exports['@implements'] = 'http://i.bixbyjs.org/x500/Class';
exports['@name'] = 'inetOrgPerson';
exports['@oid'] = '2.16.840.1.113730.3.2.2';
