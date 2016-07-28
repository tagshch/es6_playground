
/* ---------- Assignment Destructuring ----------- */


/* ---------- DESTRUCTURIZATION (array) ---------- */

let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");
console.log(firstName); // Юлий
console.log(lastName);  // Цезарь
console.log(rest);      // Император,Рима (массив из 2х элементов)

let [default1="default_value1", default2="default_value2"] = [];

console.log(default1); // default value
console.log(default2);  // default value

/* ---------- DESTRUCTURIZATION (object) ---------- */

let obj = {
    'a': 'Abba',
    'b': 'Bob',
    'c': 'Timon'
};

let {a, b, c} = obj;

console.log(a, b, c);
console.log(`someone say ${a}, but others say ${b} and ${c}`);


let options = {
    title: 'Menu',
    title1:'Menu1',
    title2:'Menu2',
    width: 100,
    height: 200
};

let {width: w, height: h, title} = options;
console.log(w, h, title);

let {width=100, height=200, title1} = options;
console.log(width, height, title1);

let {width:w1=100, height:h1=200, title2} = options;
console.log(w1, h1, title2);