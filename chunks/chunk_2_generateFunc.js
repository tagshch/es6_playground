
const generateFunc = (schema) => {
    let tpl = `return function ${schema.name}(${schema.args}){ ${schema.body} }`;
    return (new Function(tpl))();
};


let schema = {
    "name":"getSomething",
    "args": "name, age",
    "body": "let str = `My name is ${name}. I am ${age} old.`; return str;"
};

let func = generateFunc(schema);

//window[func.name] = func;

console.log(func.name, func.toString());