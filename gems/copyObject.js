function copy(o) {
    var copy = Object.create(Object.getPrototypeOf(o));
    var propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(function(name) {
        var desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // теперь o2 выглядит также, как и o1