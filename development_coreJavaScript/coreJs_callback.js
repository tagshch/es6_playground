
function callbackNumber(number, callback){
    return callback(number);
}

function slowCallbackNumber(number, callback){
    setTimeout(callback.bind(null, number), 50);
}


callbackNumber(10, console.log);
slowCallbackNumber(20, console.log);


/** ---- callback hell ---- */
let result = callbackNumber(10, function(x){
   return callbackNumber(x * 2, function(y){
       return callbackNumber(y * 2, function(z){
           return callbackNumber(z * 10, function(result){
               return result;
           });
       })
   });
});

console.log(result);