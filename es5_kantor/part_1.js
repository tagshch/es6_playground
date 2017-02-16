var log = console.log;
log('=========== PART 1 ==========');

// ===== ASSIGN (magic) =====
var uno = 2;
var dos = 1 + (uno *= 2);
var tres = 1 + (uno = uno * 2);

log(dos);
log(tres);
log('');

// ===== BYTECODE =====
log('\nBYTECODE:') 
// NB - create bytecode interpretator
log( parseInt('11100', 2) );
log( (68).toString(2) );
log( 8 << 2 );

// ===== BYTE MASKS =====
log('\nBYTE MASKS:') 

var ACCESS_ADMIN 				= 1;  // 00001
var ACCESS_GOODS_EDIT 	= 2;  // 00010
var ACCESS_GOODS_VIEW 	= 4;  // 00100
var ACCESS_ARTICLE_EDIT = 8;  // 01000
var ACCESS_ARTICLE_VIEW = 16; // 10000

var guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
var editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
var admin = editor | ACCESS_ADMIN; //11111

log(
  'guest:', guest,
  'editor:', editor,
  'admin:', admin
);

log(
  'No access:', editor & ACCESS_ADMIN, // 0, no access
  'Has access: ', editor & ACCESS_ARTICLE_EDIT // 8, has access
);


var check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT; // 6, 00110
log( 'Check access:', admin & check ); // not 0, then has access to view or edit


// ===== ROUND (same as Math.floor) =====
log('\nROUND:')
log( ~~ 12.35 );
log( 12.66 ^ 0);
log( 14.3 * 8.735 ^ 0);
log( 11.2 + 4.75 ^ 0);

// ===== CHECK MINUS ONE ======
log('\nCHECK NOT MINUS ONE:')

var n = -1;
log('n == -1: ', ~n == 0, '(' + ~n + ')');

var str = 'Checking';
if(~str.indexOf('king')) log('Has "king" word!');


// ===== CHECK IF NOT FLOAT =====
log('\nCHECK IS NOT FLOAT:')

function isInteger(nmb){
  return nmb == ~~nmb;
}

log ( isInteger(1) ); // true
log ( isInteger(1.5) ); // false
log ( isInteger(-0.5) ); // false;

// ===== TERNARY OPERATOR =====
log('\nUSEFUL TERNARY:')

var level = 170;

var message = 
  (level < 10) ? 'low' :
	(level < 50) ? 'medium' :
	(level < 100) ? 'high' :
	'critical';

console.log('Level:', message);

var brand = 'Samsung';

(brand == 'Samsung') ?
  log('Brand is', brand) : log('Brand is not', brand);


var role;
var login = 'user';

if(login == 'admin'){
  role = 'admin';
} else if (login == 'editor'){
  role = 'editor';
} else if (login == 'user'){
  role = 'user';
} else {
  role = "";
}

log(login, role);

role = 
  (login == 'admin') ? 'admin' :
	(login == 'editor') ? 'editor' :
	(login == 'user') ? 'user' : "";

log(login, role);



log (String(null) === 'null');

// ==== WHILE ====
log('\nWHILE:');

var i = 0;
while(i < 5){ log(i++); }
log('');

var j = 0;
while(++j < 5){ log(j); }
log('');

var k = 0;
while(k++ < 5){ log(k); }

// ==== FOR ====
log('\nFOR:');

for(var a = 0; a < 5; a++) log(a); log('');
for(var b = 0; b < 5; ++b) log(b); log('');
for(var c = 0; c < 10; c += 2) log(c); log('');

// ==== SIMPLE NUMBERS (delete only by itself and 1) =====


nextPrime: 
  for(var d = 2; d < 10; d++){
    for(var e = 2; e < d; e++){
        if(d%e == 0) continue nextPrime;
    } 
    log('isPrime:', d);
  }


// ======== RECURSIVE POW ==========
log('\nPOW');

function pow(x, n){
  //var y = x;
  //while( n-- > 1 ) y *= x;
  //return y;
  
  //if(n > 1) return x * pow(x, n - 1);
  //return x;
  
  return (n > 1) ? x * pow(x, n - 1) : x;
}

// ======== RECURSIVE SUM TO ==========
log('\nSUM TO');

function sumTo(x){
  //if(x > 0){ return x + sumTo(x - 1); }
  //return x;
  
  return x ? x + sumTo(x-1) : x;
}

// ======== RECURSIVE FACTORIAL ==========
log('\nFACTORIAL');

function factorial(x){
  	//if(x > 1){ return x * fact(x-1); }
    //return x;
    
    //return (x > 1) ? x * fact(x - 1) : x;

    return x ? x * fact(x - 1) : 1;
}


// ======== FIBONACCI ==========
log('\nFIBONACCI');

function fibo(x){
  // x - array length of fibonacci number - [1, 1, 2, 3, 5, 8]
  var nmb = 0;
  var arr = [];
  while(x--){
    if(!arr.length || arr.length == 1){
      arr.push(1); 
      continue;
    }
    nmb = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nmb);
  }
  return arr;
}

function optFibo(x){
  var arr = [];
  while(x--){
    //(!arr.length || arr.length == 1) && arr.push(1);
    //arr.length > 1 && arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    arr.push( arr.length > 1 ? (arr[arr.length - 2] + arr[arr.length - 1]) : 1);
  }
  return arr;
}

function superOptFibo(x){
  var arr = [1, 1];
  while(x--) arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
}

log('');

// ======== NAMED FUNCTION EXPRESSION =========
var nfe = function onlyInsideFunc(){
    log(onlyInsideFunc);
}

// onlyInsideFunc(); // error!
nfe();

// --- example ---
function sum(n){
    return n ? n + sum(n-1) : 0;
}
var g = sum;
sum = null;
// log(g(5)); // get error!

// --- solution ---
var f = function innerSum(n){
    return n ? n + innerSum(n-1) : 0;
}
var g = f;
f = null;
log(g(5)); // 15


// ========== ... =========
function g1() { return 1; };
(function g2() { return 1; });

//log(g1);
//log(g2); // error!


// ======= CHECK IF NUMERIC ========
// 12 or "12"
function isNumeric(x){
    return !isNaN(parseFloat(x)) && isFinite(x);
}


// ======== ERROR IN MATH =======
log('\ERROR IN MATH');
function getErrorInMath(){
  var i = 50;
  var sum = 0;
  while(i--) sum += 0.2;
  log(sum); 
}


// ======== GET DECIMAL =========
log('\nGET DECIMAL');

function getDecimal(x){
  	return +(0 + '.' + x.toString().split('.')[1]);
}

log(getDecimal(12.132));


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

