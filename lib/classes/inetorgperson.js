exports.parse = function(obj) {
  var o = {};
  if (obj.givenName) {
    o.name = { givenName: obj.givenName };
  }
  if (obj.mail) {
    o.emails = [{ value: obj.mail }];
  }
  if (obj.uid) { o.username = obj.uid; }
  
  return o;
}

exports.format = function(obj) { 
}
