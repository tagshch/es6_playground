
var log = console.log;

// ======== OBJECT IN JS =========
log("\nOBJECT IN JS");

var human = {
  name: 'Gringo',
  age: '52'
}

log(human);

var ageKey = 'age';
var nameKey = 'name';

// with if-in operator
if(nameKey in human) log('Has "name" key!');
if(ageKey in human) log('Has "age" key!');

// with undefined comparison
if(human.age) log('Has "age" key!');
if(human.details == undefined) log('No "details" key!')

// ====== ARR - PASS BY REF ======
var arr = [1,2,3];
var arr2 = arr;
arr2[0] = 5;
log(arr, arr2);

var arr3 = [].concat(arr);
arr3[0] = 1;
log(arr3);


// ========= ERASTOFEN REALIZATION ===========
function genarr(n){
  var arr = [];
  for(var i = 2; i < n; i++) arr.push(i);
  return arr;
}

function erastofen(arr){
  var _arr = [].concat(arr);
  
  for(var i = 0; i < arr.length; i++){
    var item = arr[i];
    for(var j = i + 1; j < _arr.length; j++){
      if(_arr[j]%item == 0) _arr.splice(j, 1 );
    }
  }

  return _arr;
}

var arr = genarr(100);
var simpleArr = erastofen(arr);

log(simpleArr);


// ========= EVERY / SOME ===========
var arr = [1,2,3,4,5,6,7,8];

function isBiggerThanFive(nmb){
  return nmb > 5;
}

var everyBigger = arr.every(isBiggerThanFive); // false
var someBigger = arr.some(isBiggerThanFive); // true

log(everyBigger, someBigger);


// ========= REDUCE / REDUCE RIGHT ==========
log("\nREDUCE");
var res1 = arr.reduce(function(sum, current){
  return (sum + current);
}, 0);

var res2 = arr.reduce(function(sum, current){
  return (sum + current);
});

var res3 = arr.reduceRight(function(sum, current){
  return (sum + 2*current);
}, 0)

log('REDUCE RESULT:',res1, res2);
log('RIGHT REDUCE RESULT:', res3);


// ========= DATE ==========
log("\nDATE");

function getDateAgo(days){
    var d = new Date();
    d.setDate(d.getDate()-days);
    return d;
}
log(getDateAgo(1));

function getLastDayOfTheMonth(year, month){
    return new Date(year, month + 1);
}
log(getLastDayOfTheMonth(2012, 1));

function getSecondsToday(date){
    var d = new Date();
    var seconds = d.getHours()*60*60 + d.getMinutes()*60 + d.getSeconds()
    return seconds;
}
log(getSecondsToday());

function getSecondsToTomorrow(){
    return 60*60*24 - (d.getHours()*60*60 + d.getMinutes()*60 + d.getSeconds());
}
log(getSecondsToTomorrow);

function formatDate(date){
    var month = date.getMonth() + 1;
  	month = (month.toString().length < 2 ? '0' + month : month);  
    return date.getDate() + '.' + month + '.' + date.getFullYear();
}
var d = formatDate(new Date(2014, 0, 30));
log(d);

log('\nFORMAT RELATIVE DATE');

function formatRelDate(date){
  var diff = (new Date() - date) / 1000;
  var str = null;
  switch(true){
  	case diff < 1:  str = "Только что"; break;
    case diff >= 1 && diff < 60: str = ~~diff + ' сек. назад'; break;
    case diff >= 60 && diff < 3600: str = ~~(diff / 60) + ' мин. назад'; break;
    case diff >= 3600: str = date.toLocaleString('ru'); break;
  }
  
  log(str);
}

var almostNow = new Date(new Date - 1); // less than 1 seconds
var halfMinute = new Date(new Date - 30 * 1000); // 30 seconds ago
var fiveMinAgo = new Date(new Date - 5 * 60 * 1000) // 5 minutes ago
var yesterDay = new Date(new Date - 86400 * 1000); // yesterday

formatRelDate(almostNow);
formatRelDate(halfMinute);
formatRelDate(fiveMinAgo);
formatRelDate(yesterDay);

// ========= CLOSURES ==========
log('\nCLOSURES');

function makeCounter(){
  var currentCount = 0;
  
  return function(){
    return currentCount++;
  }
}

var counter = makeCounter();
log(counter());
log(counter());
log(counter());

// ========= CLOSURES ===========

say('Vasya');
var phrase = 'Hello';

function say(name){
  log(name + ', ' + phrase);
}

var value = 0;

function f(){
  if(1){
    value = true;
  } else {
    var value = false;
  }
  log(value);
}

f();

function someCounter(){
  var current = 1;
  return function(){
    var current;
    return current;
  }
}

var fn = someCounter();
log(fn());