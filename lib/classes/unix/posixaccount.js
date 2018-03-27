exports.parse = function(obj) {
  var o = {};
  if (obj.uidNumber) {
    o.id = obj.uidNumber;
  }
  
  return o;
}

exports.format = function(obj) { 
}
