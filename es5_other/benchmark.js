var arr = [];
for(var i = 0; i < 10000; i++) arr[i] = 0;

function forLoop(arr){
    for(var i = 0; i < arr.length; i++);
}

function foreachLoop(arr){
    for(var key in arr);
}

function whileLoop(arr){
    var nmb = arr.length;
    while(nmb) nmb--;
}

function mapLoop(arr){
    arr.map(function(elem){ return elem; });
}

function filterLoop(arr){
    arr.filter(function(elem){ return elem; });
}

function reduceLoop(arr){
    arr.reduce(function(agg, elem){ return elem; }, 0)
}

function bench(f, data){
    var date = new Date();
    for(var i = 0; i < 1000; i++) f(data);
    return new Date() - date;
}

// 1st way
// console.log('foreach:', bench(foreachLoop));
// console.log('for-loop:', bench(forLoop));
// console.log('map-loop:', bench(mapLoop));

// 2nd way
var time1 = 0;
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;

for(var i = 0; i < 1; i++){
    time1 += bench(forLoop, arr);
    time2 += bench(foreachLoop, arr);
    time3 += bench(whileLoop, arr);
    time4 += bench(mapLoop, arr);
    time5 += bench(filterLoop, arr);
    time6 += bench(reduceLoop, arr);
}

console.log(time1, time2, time3, time4, time5, time6);

// 3rd way
//console.time('foreachLoop');
//bench(foreachLoop);
//console.timeEnd('foreachLoop');


