exports = module.exports = function(container) {
  var Factory = require('fluidfactory');
  
  
  // TODO: Implement a local directory
  // dscl /Local/Default -authonly username password
  
  var factory = new Factory();
  
  var createFnDecls = container.specs('http://i.bixbyjs.org/ds/createDirectoryFunc');
  return Promise.all(createFnDecls.map(function(spec) { return container.create(spec.id); } ))
    .then(function(fns) {
      fns.forEach(function(fn, i) {
        factory.use(fn);
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
