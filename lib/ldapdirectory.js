var EventEmitter = require('events');
var ldap = require('ldapjs');
var util = require('util');


function LDAPDirectory(url, options) {
  EventEmitter.call(this);
  this._baseDN = options.baseDN;
  
  
  var opts = { url: url };
  if (options.name && options.password) {
    opts.bindDN = options.name;
    opts.bindCredentials = options.password;
  }
  
  this._client = ldap.createClient(opts);
  this._client.on('connect', this.emit.bind(this, 'connect'));
  this._client.on('error', this.emit.bind(this, 'error'));
  
  this._authnClient = ldap.createClient({ url: url });
  this._authnClient.on('error', this.emit.bind(this, 'error'));
}

util.inherits(LDAPDirectory, EventEmitter);

LDAPDirectory.prototype.find = function(id, cb) {
  var opts = { scope: 'one' };
  if (typeof id == 'string') {
    opts.filter = '(uidNumber=' + id + ')';
  } else {
    opts.filter = '(uid=' + id.username + ')';
  }
  
  // TODO: Make this more extensible on object class
  // Normalize to portable contacts, like Passport.js
  function normalize(entry) {
    var entity = {};
    entity._dn = entry.dn;
    entity.id = entry.uidNumber;
    entity.username = entry.uid;
    entity.displayName = entry.cn;
    entity.name = {
      familyName: entry.sn,
      givenName: entry.givenName
    }
    
    if (entry.mail) {
      entity.emails = [ { value: entry.mail } ];
    }
    return entity;
  }
  
  this._client.search(this._baseDN, opts, function(err, res) {
    if (err) { return cb(err); }
    
    var entries = [];
    
    res.on('searchEntry', function(entry) {
      entries.push(entry.object);
    });
    
    res.on('searchReference', function(referral) {
    });
    
    res.on('end', function(result) {
      if (result.status != 0) {
        return cb(new Error('LDAP search error'));
      }
      
      switch (entries.length) {
      case 0:
        return cb(null);
      case 1:
        // TODO: Normalize this object
        return cb(null, normalize(entries[0]));
      default:
        return cb(new Error('LDAP search too many results'));
      }
    });
    
    res.on('error', function(err) {
      return cb(err);
    });
  });
};

// TODO: add, modify, delete


LDAPDirectory.prototype.authenticate = function(username, password, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  } else if (typeof options == 'string') {
    options = { realm: options };
  }
  
  var self = this;
  this.find({ username: username }, function(err, user) {
    if (err) { return cb(err); }
    if (!user) { return cb(null, false); }
    
    self._authnClient.bind(user._dn, password, function(err) {
      if (err && err.code == 49) { // invalidCredentials
        return cb(null, false);
      } else if (err) {
        return cb(err);
      }
      
      return cb(null, user);
    });
  });
};


module.exports = LDAPDirectory;
