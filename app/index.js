/*
exports = module.exports = {
  'directory': require('./directory'),
  'directory/ldap': require('./directory/ldap')
};
*/

exports = module.exports = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
