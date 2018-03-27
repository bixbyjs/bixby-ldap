exports.parse = function(obj) {
  var o = {};
  o.displayName = obj.cn;
  if (obj.sn) {
    o.name = { familyName: obj.sn };
  }
  // TODO: telephoneNumber
  
  return o;
}

exports.format = function(obj) { 
}
