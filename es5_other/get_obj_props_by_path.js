
let log = console.log;

function objGet(obj, path){
    return new Function('_', 'return _.' + path)(obj);
}

let obj = {
    a: {
        b: 'this is a.b',
        c: 'this is a.c'
    }
};

let val = objGet(obj, 'a.b');

log(val);