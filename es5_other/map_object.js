
Object.prototype.map = function(callback){
  
  var _obj = {};
  var indexArr = Object.keys(this);
  
  for(var i = 0; i < indexArr.length; i++){
    
    _obj[indexArr[i]] = callback(this[indexArr[i]], indexArr[i], i);
    
  }
  
  return _obj;
  
}

var obj = {
  1: "bingo",
  2: "bongo"
}

obj.map(function(key, item){
  	console.log(key, item);
});
