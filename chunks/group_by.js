function groupBy(obj, type){
    let result = {};
    
    if(typeof type == 'string' && type == 'length'){
        Object.keys(obj).forEach(key=>{
            let item = obj[key];
            if(result[item.length] == undefined){
                result[item.length] = [];
            }
            
            result[item.length].push(key);
        });
    }
    
    if(typeof type == 'function'){
        Object.keys(obj).forEach(key => {
            
            let item = obj[key];
            
            if(result[item.length] == undefined){
                result[item.length] = [];
            }
            
            result[type(item)].push(key);
        }
        );
    }
    
    return result;
}

var a = groupBy({a: 'aa', b: 'bbb', c: 'cc'}, 'length');
var b = groupBy({a: 'aa', b: 'bbb', c: 'cc'}, el => el.length);

console.log(a, b);
