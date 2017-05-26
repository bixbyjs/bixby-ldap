exports = module.exports = function(container) {
  var Factory = require('fluidfactory');
  
  
  // TODO: Implement a local directory
  // dscl /Local/Default -authonly username password
  
  var factory = new Factory();
  
  var createImplComps = container.components('http://i.bixbyjs.org/ds/createDirectoryImpl');
  return Promise.all(createImplComps.map(function(comp) { return comp.create(); } ))
    .then(function(impls) {
      impls.forEach(function(impl) {
        factory.use(impl);
      });
    })
    .then(function() {
      // TODO: Replace this with configuration store
      var options = global.DIRECTORY_SETTINGS;
      
      return factory.create(options);
    });
};

exports['@implements'] = 'http://i.bixbyjs.org/ds/Directory';
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
