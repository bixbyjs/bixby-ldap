exports = module.exports = function(container) {
  
  return function createLDAPDirectory(options) {
    var LDAPDirectory = require('../../lib/ldapdirectory');
    
    return new Promise(function(resolve, reject){
      var directory = new LDAPDirectory(options.url, options);
      
      directory.once('connect', function() {
        resolve(directory);
        // TODO: Remove error listener
      });
      
      // TODO: reject on error.
    });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/ds/createDirectoryFunc';
exports['@singleton'] = true;
