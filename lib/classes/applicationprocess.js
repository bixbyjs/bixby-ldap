exports.parse = function(obj) {
  var o = {};
  o.displayName = obj.cn; // array?
  o.description = obj.decription;
  o.organizationalUnit = obj.ou;
  
  o.location = obj.l;
  
}

exports.format = function(obj) {
  
  
}