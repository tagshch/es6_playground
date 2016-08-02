
/* ---------- ITERATORS ----------- */

var foo = {
        [Symbol.iterator]: () => ({
        items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
        next: function next () {
            return {
                done: this.items.length === 0,
                value: this.items.shift()
            }
        }
    })
}

for(let item of foo){
    console.log(item);
}

//LOOP BELOW DOESN'T WORK FOR ITERATOR!
for(let k in foo){
    console.log(k, foo[k]);
    console.log('-----')
}

console.log('[...foo]:          ', [...foo]);
console.log('[Array.from(foo)]: ', Array.from(foo));


console.log('----------------------------------');


let range = {
    from: 1,
    to: 5
};

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {

    let current = this.from;
    let last = this.to;

    // метод должен вернуть объект с методом next()
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let num of range) {
    console.log('Range number: ', num); // 1, затем 2, 3, 4, 5
}


console.log('----------------------------------');


let range_a = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current === undefined) {
            // инициализация состояния итерации
            this.current = this.from;
        }

        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            // очистка текущей итерации
            delete this.current;
            return {
                done: true
            };
        }
    }

};

for (let num of range_a) {
    console.log(num); // 1, затем 2, 3, 4, 5
}

// Произойдёт вызов Math.max(1,2,3,4,5);
console.log('Max number is: ', Math.max(...range_a) ); // 5 (*)


console.log('----------------------------------');


let str = "Hello";
// Делает то же, что и
// for (var letter of str) alert(letter);

let iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // Выведет все буквы по очереди
}
