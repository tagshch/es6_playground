
// -------- PROMISES WITH ARROW FUNCTIONS  --------

let promise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
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

//simple callback  
function sayIt(say) {
    say();
}
sayIt(function() {
    console.log('say');
});
 

let promise = new Promise(
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



