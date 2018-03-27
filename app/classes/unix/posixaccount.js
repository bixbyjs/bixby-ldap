// https://tools.ietf.org/html/rfc2307
exports = module.exports = function() {
  return require('../../../lib/classes/unix/posixaccount');
}

exports['@implements'] = 'http://i.bixbyjs.org/x500/Class';
exports['@name'] = 'posixAccount';
exports['@oid'] = '1.3.6.1.1.1.2.0';
