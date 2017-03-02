exports = module.exports = {
  'directory': require('./directory'),
  'directory/ldap': require('./directory/ldap')
};

exports.load = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
