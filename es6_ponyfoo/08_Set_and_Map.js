/* ---------- SET ---------- */
let set = new Set();
set.add('HR');
set.add('Finance');
set.add('Finance'); //Duplicate ignored

set.add({name: 'GIS', desc: 'Mapping'});

if (set.has('Finance')) console.log('Found it!');

console.log(set.size); // 3 size
set.delete('Finance'); //Delete single item
console.log(set.size); // 2 size
set.clear(); //Clear all items
console.log(set.size); // 0 size


console.log('----------------');
