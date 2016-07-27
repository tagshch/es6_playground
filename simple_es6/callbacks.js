(function(){
//Simple example of Set
    /*
     var set = new Set();
     set.add('HR');
     set.add('Finance');
     set.add('Finance'); //Duplicate ignored

     set.add({name: 'GIS', desc: 'Mapping'});

     if (set.has('Finance')) console.log('Found it!');

     set.delete('Finance'); //Delete single item
     set.clear(); //Clear all items

     console.log(set.size);
     */

    let obj = {
        'a': 'Abba',
        'b':'Bob',
        'c':'Cmon'
    }
    let {a, b, c} = obj;
    //console.log(a, b, c);
    //console.log(`someone say ${a}, but others say ${b} and ${c}`)

    // -------- PROMISES WITH ARROW FUNCTIONS  --------
    /*
     let promise = new Promise(
     (resolve, reject) => {
     setTimeout(()=>{
     reject('result');
     }, 1000)
     }
     );

     promise.then(
     result => {
     console.log('Fullfiled!', result);
     },
     error => {
     console.log('Rejected!', error)
     }
     )
     */

    //setTimeout(() => console.log('Gingo!'), 500);

    //simple callback
    /*
     function sayIt(say){
     say();
     }
     sayIt(function(){
     console.log('say');
     });
     */

    var promise = new Promise(
            (resolve, reject) => {
            if(10 > 5){
        resolve('[resolved]');
    } else {
        reject('[rejected]');
    }
}
    );

    console.log('-----------------');

    promise
        .then(response => {
            let result = response + '+ Bingo!';
            return result;
        })
        .then(result => {
            let sentence = result + '+ sentence!';
            return sentence;
        })
        .then(sentence => {
            console.log(`Sentence = ${sentence}`);
        });




})();
