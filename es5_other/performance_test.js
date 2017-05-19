function forLoop(arr) {
    for (var i = 0; i < arr.length; i++) {}
}

function whileLoop(arr) {
    var nmb = arr.length;
    while (nmb) { nmb--; }
}

function forEach(arr) {
    for (var i in arr) {}
}

function mapLoop(arr) {
    arr.map(function (item) {});
}

function reduceLoop(arr) {
    arr.reduce(function (item) {});
}

function filterLoop(arr) {
    arr.filter(function (item) {});
}

// generate array of numbers
function generateArray(nmb) {
    var arr = [];
    for (var i = 0; i < nmb; i++) {
        arr.push(Math.round(Math.random() * 1000));
    }
    return arr;
}

function checkTime(name, callback) {
    console.time(name);
    for (var i = 0; i < 50; i++) {
        callback();
    }
    console.timeEnd(name);
}

console.log();

console.time('generateArray');
var numbers = generateArray(1000000);
console.timeEnd('generateArray');

console.log();

checkTime('forLoop', function () { forLoop(numbers); });
checkTime('whileLoop', function () { whileLoop(numbers); });
checkTime('forEach', function () { forEach(numbers); });

console.log();

checkTime('map', function () { mapLoop(numbers); });
checkTime('filter', function () { reduceLoop(numbers); });
checkTime('reduce', function () { filterLoop(numbers); });

console.log();