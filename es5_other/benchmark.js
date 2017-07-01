var arr = [];
for(var i = 0; i < 1000; i++) arr[i] = 0;

function foreachLoop(){
    for(var key in arr) arr[key]++;
}

function forLoop(){
    for(var i = 0; i < arr.length; i++) arr[i]++;
}

function mapLoop(){
    arr = arr.map(function(elem, i){ return elem; });
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

for(var i = 0; i < 50; i++){
    time1 += bench(foreachLoop);
    time2 += bench(forLoop);
    time3 += bench(mapLoop);
}

console.log(time1,time2,time3);

// 3rd way
console.time('foreachLoop');
bench(foreachLoop);
console.timeEnd('foreachLoop');


