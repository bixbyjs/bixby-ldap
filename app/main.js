exports = module.exports = function(agent) {
  var api = {};
  
  api.createClient = function(options, connectListener) {
    return agent.createClient(options, connectListener);
  };
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/ldap';
exports['@singleton'] = true;
exports['@require'] = [
  './agent'
];
