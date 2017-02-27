let log = console.log;

var generateTemplateString = (function () {
    var cache = {};

    function generateTemplate(template) {

        var fn = cache[template];

        if (!fn) {

            // Replace ${expressions} (etc) with ${map.expressions}.
            var sanitized = template.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function (_, match) {
                return `\$\{map.${match.trim()}\}`;
            });

            // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
            sanitized = sanitized.replace(/(\$\{(?!map\.)[^}]+\})/g, '');

            fn = Function('map', `return \`${sanitized}\``);

        }

        return fn;
    }

    return generateTemplate;
})();



let str = generateTemplateString('bingo ${bongo}');

log(str({ bongo: 'BINGO!'}));
log(str({}));




/*
let Wrapper = function (options) {

    let obj = {};

    for (let key in options.get) {
        obj[key] = returnRequest(options.get[key]);
    }

    function returnRequest(req) {
        return function (obj) {
            // dynamically generate


            return req;
        }
    }

    return obj;
};


// ---- main ----
let engine = Wrapper({
    root: 'www.moex.com',
    parseJson: true,
    get: {
        list: '/iss/engines.json',
        single: '/iss/engines/${engine}.json'
    }
});

let data1 = engine.list();
let data2 = engine.single({engine: 'stock'});

log(data1, data2);
*/
