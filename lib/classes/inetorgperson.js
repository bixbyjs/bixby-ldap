exports.parse = function(obj) {
  var o = {};
  if (obj.mail) {
    o.emails = [{ value: obj.mail }];
  }
  
  return o;
}

exports.format = function(obj) { 
}
