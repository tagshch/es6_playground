/**
 * Know several options how to create Array
 */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(5); // limit - positive and less than (2^32)
let arr3 = new Array(1, 2, 3, 4, 5);

/**
 * Know how Array length property works
 */
console.log(arr1, arr1.length);
arr2.length = 2;
console.log(arr2, arr2.length);

/**
 * Know how to copy array
 * Know how to copy array part
 * Know how to modify array
 */

let arr4 = arr1.concat();
let arr5 = arr1.slice(0, 1);
arr4[6] = 10;

arr4.fill(20, 5, 10);
arr4.forEach((item, index, arr) => arr[index] = (item + 1), {});
arr4.push(30);
arr4.pop();
arr4.shift();
arr4.unshift();
arr4.reverse();
arr4.splice(0, 1); // remove first item
arr4.splice(2, 0, 66); // add 66 after second item
arr4.join();


/**
 * Be able to filter Array elements
 * */
arr1.filter(item => item > 3);
arr1.reduce((agg, item) => agg[item], {});

/**
 * Know several method how to iterate Array elements
 * Be able to compare Hash and Array performance
 */
arr1.forEach();
for(let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
}
for(let i in arr1){
    if(arr1.hasOwnProperty(i)){
        // console.log(arr[i]);
    }
}


/**
 * Know how to sort Array
 * Be able to custom sorting for Array
 */

