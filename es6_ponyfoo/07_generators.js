
/* ------------ GENERATORS ------------ */

function* generator () {
    yield 'f'
    yield 'o'
    yield 'o'
}
var g = generator();

// a generator object g is built using the generator function
console.log(typeof g[Symbol.iterator] === 'function');

// it's an iterable because it has an @@iterator
console.log(typeof g.next === 'function');

// it's also an iterator because it has a .next method
console.log(g[Symbol.iterator]() === g);

// the iterator for a generator object is the generator object itself
console.log([...g]);
// <- ['f', 'o', 'o']

console.log(Array.from(g));
// <- ['f', 'o', 'o']


console.log(" ------- generator2: ---------- ");

function* generator2 () {
    yield 'p'
    console.log('o')
    yield 'n'
    console.log('y')
    yield 'f'
    console.log('o')
    yield 'o'
    console.log('!')
}

var foo = generator2();
for (let pony of foo) {
    console.log(pony);
}

var bar = generator2();
console.log("generator2: ", [...foo]);

console.log(" ---------- generator3 --------- ");

function* generator3 () {
    yield* 'ponyfoo'
}
console.log("generator3: ", [...generator3()]);
