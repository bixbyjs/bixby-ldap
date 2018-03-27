exports.parse = function(obj) {
  var o = {};
  o.serialNumber = obj.serialNumber;
  o.displayName = obj.cn; // array?
  o.description = obj.decription;
  o.organizationalUnit = obj.ou;
  o.organization = obj.o; // DN ref?
  o.location = obj.l;
  
}

exports.format = function(obj) {
  
  
}