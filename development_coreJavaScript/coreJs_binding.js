/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 *
 * https://learn.javascript.ru/bind
 * Методы call/apply вызывают функцию с заданным контекстом и аргументами.
 * А bind не вызывает функцию. Он только возвращает «обёртку», которую мы можем вызвать позже,
 * и которая передаст вызов в исходную функцию, с привязанным контекстом.
 * */

(function () { /* -------- EXAMPLE 1 -------- */

    let data = {
        key: 'key1',
        getKey: function () {
            return this.key;
        }
    };

    let otherData = {
        key: 'key1'
    };

    let getOtherDataKey = data.getKey.bind(otherData);

    let key1 = data.getKey();
    let key2 = getOtherDataKey();

    console.log('Ex1', key1, key2);
}());


(function () { /* -------- EXAMPLE 2 -------- */

    function list() {
        return Array.prototype.slice.call(arguments);
    }

    let getArrayWithDefaultValue = list.bind(null, 7, 8, 9);

    let arr1 = list(1, 2, 3); // [1, 2, 3]
    let arr2 = getArrayWithDefaultValue(1, 2, 3);

    console.log('Ex2', arr1, arr2);
}());


(function () { /* -------- EXAMPLE 3 -------- */

    function Handler() {
        this.status = true;
    }

    Handler.prototype.slowShow = function () {
        console.log('Ex3', 'Status will be showed after 1000 ms...');
        setTimeout(this.show.bind(this), 1000);
    };

    Handler.prototype.show = function () {
        console.log('Ex3', 'Status:', this.status);
    };

    let status = new Handler();
    status.slowShow();
}());


(function () { /* -------- EXAMPLE 4 -------- */
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    let yAxisPointNull = Point.bind(null, 3/*x*/);

    let emptyObj = {};
    let yAxisPointObj = Point.bind(emptyObj, 5/*x*/);

    let axisPoint1 = new Point(1, 2);
    let axisPoint2 = new yAxisPointNull(4); //
    let axisPoint3 = new yAxisPointObj(6);

    console.log('Ex4', axisPoint1);
    console.log('Ex4', axisPoint2);
    console.log('Ex4', axisPoint3);

    let res1 = axisPoint3 instanceof Point; // true
    let res2 = axisPoint3 instanceof yAxisPointObj; // true
    let res3 = new Point(17, 42) instanceof yAxisPointObj; // true

    console.log('Ex4', res1, res2, res3);
}());

(function () { /* -------- EXAMPLE 4 (simplified) -------- */
    function Dog(x, y) {
        this.x = x;
        this.y = y;
    }

    let obj1 = new Dog('Wuff', 'Wuff');
    let obj2 = Dog.bind({}, 'Woof', 'Woof');

    console.log('Ex4_s', typeof obj1, obj1.constructor, obj1);
    console.log('Ex4_s', typeof obj2, obj2, new obj2);
}());

(function () { /* -------- EXAMPLE 4 (advanced) -------- */
    function DogFactory(name, age) {
        this.name = name;
        this.age = age;
    }

    let GrayDog = DogFactory.bind({}, 'Bingo', 0); // fixed name and age
    let BlackDog = DogFactory.bind({}, 'Bingo'); // fixed name
    let WhiteDog = DogFactory.bind({});

    console.log('Ex4_a', new GrayDog('Bongo', 10));
    console.log('Ex4_a', new BlackDog(10));
    console.log('Ex4_a', new WhiteDog('Bongo', 10));
}());


(function () { /* -------- EXAMPLE 5 -------- */
    let data = [1, 2, 3, 4, 5];

    let slice1 = Array.prototype.slice;
    let slice2 = Function.prototype.apply.bind(Array.prototype.slice);

    let res1 = slice1.apply(data, [0, 3]);
    let res2 = slice2(data, [0, 4]);

    console.log('Ex5', res1, slice1);
    console.log('Ex5', res2, slice2);
}());