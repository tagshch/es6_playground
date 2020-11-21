/**
 * https://learn.javascript.ru/let-const
 * https://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth
 *
 * Переменные let:
 * - Видны только после объявления и только в текущем блоке.
 * - Нельзя переобъявлять (в том же блоке).
 * - При объявлении переменной в цикле for(let …) – она видна только в этом цикле. Причём каждой итерации соответствует своя переменная let.
 * - Переменная const – это константа, в остальном – как let.
 *
 * */



/** ---- temporal dead zone ---- */
(function () {
    // --- No TDZ error ---
    function readThere() {
        return dragons;
    }

    // console.log(readThere()); // error
    // let dragons = 'dragons';

    // --- TDZ error ---
    // dogs = 'dogs';
    // let dogs = 'dogs'; // error
    // console.log(dogs);
}());


/** ---- const ----
 * - const is also block-scoped
 * - const also enjoys the marvels of TDZ semantics
 *
 * - const variables must be declared using an initializer
 * - const variables can only be assigned to once, in said initializer
 * - const variables don’t make the assigned value immutable
 * - Assigning to const will fail silently
 * - Redeclaration of a variable by the same name will throw
 *
 * */
(function () {
    // const immutableValue = 1;
    // immutableValue = 2; // error

    const immutableReferToObj = {
        text: "test",
        value: 20
    };

    const immutableObj = Object.freeze({
        text: "test",
        value: 20
    });

    immutableReferToObj.text = 'bingo';
    immutableReferToObj.value = 'bongo';

    immutableObj.text = 'bingo';
    immutableObj.value = 'bongo';

    console.log(immutableReferToObj);
    console.log(immutableObj);
}());

(function () {
    const cool = {people: ['you', 'me', 'tesla', 'musk']};
    var uncool = cool;
    uncool = {people: ['edison']}; // so uncool he's all alone
    console.log(uncool);
}());