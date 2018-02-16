exports = module.exports = function() {
  var Agent = require('../lib/agent');
  
  return new Agent();
};

exports['@singleton'] = true;
