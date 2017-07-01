let handler = {
  get:function(target, name){
    return name in target ?
      target[name] : 'No name!';
  },
  set:function(obj, prop, value){
    obj[prop] = value;
    return true;
  }
}

let p = new Proxy({}, handler);

p.name = 'Joe';
p.age = 100;

console.log(p);