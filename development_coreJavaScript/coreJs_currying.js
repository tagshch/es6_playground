/** ---- callback hell example ---- */
// function callbackNumber(number, callback){
//     return callback(number);
// }
// let result = callbackNumber(10, function(x){
//     return callbackNumber(x * 2, function(y){
//         return callbackNumber(y * 2, function(z){
//             return callbackNumber(z * 10, function(result){
//                 return result;
//             });
//         })
//     });
// });
// console.log(result); // 10 * 2 * 2 * 10 = 400

/** ---- curring ---- */
function callback(callback, number) {
    return callback(number);
}

function multiply(x, y) {
    return x * y;
}

function curry(func) {
    return func.apply(null, []);
}


// get function which return itself
function func(number, callback) {
    return func.apply(callback(number));
}

let a = func(10, (number) => number);

console.log(a);


