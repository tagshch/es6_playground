function generateDynamicClass(name, methods){

    methods = !methods ? [] : methods.map(method => {
        return `${method}(){ return "${method}()"; };`;
    });

    let body = `class ${name}{`;
    body += methods ? methods.join("") : "";
    body += '};';
    body += `return ${name}`;

    return new Function(body)();
}

let App = generateDynamicClass('App', ['init', 'componentDidMount', 'render']);

let bingo = new App();

console.log(
    bingo,
    bingo.init(),
    bingo.render()
);