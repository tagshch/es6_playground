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




let deposit = 5400000;
let time = 20;
let part = deposit/time;

while(time > 0){
    let percent = Math.round(deposit/100);

    if(time == 19){
        deposit += 21;
    }
    if(time == 16){
        deposit += 21;
    }

    deposit = deposit - part + percent;
    time--;
    //console.log(deposit, percent);
}

console.log('Deposit summ left:', deposit - 50);
console.log('Deposit with percents', deposit + 540);



