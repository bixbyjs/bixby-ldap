var ldap = require('ldapjs');


function Agent() {
  this._connections = {};
}

Agent.prototype.createClient = function(options, connectListener) {
  var client = ldap.createClient(options);
  if (connectListener) { client.on('connect', connectListener); }
  return client;
}


module.exports = Agent;
