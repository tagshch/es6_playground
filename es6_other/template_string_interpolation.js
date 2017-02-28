let log = console.log;

/* =============== WORKING WITH TEMPLATE STRING =============== */


/* ------ IF WE HAVE VARIABLES ------ */

function buildURL(strArray, ...valArray) {
    let url = "";

    for(var i = 0; i < strArray.raw.length; i++){
        if(valArray[i] == undefined) break;
        url += strArray.raw[i] + valArray[i];
    }

    return url;
}

var lang = "en-us";
var a = "library";
var b = "dn771551.aspx";

// Call the tagged template function.
var _url = buildURL`http://msdn.microsoft.com/${lang}/${a}/${b}`;

log('------- ex_1 -------');
log(_url);



/* ------ IF WE DOESN'T HAVE VARIABLES ------ */

// --- with caching paths ---
var generateTemplateString = (function () {
    var cache = {};

    function generateTemplate(template) {

        var fn = cache[template];

        if (!fn) {
            // Replace ${expressions} (etc) with ${map.expressions}.

            var regex_1 = /\$\{([\s]*[^;\s\{]+[\s]*)\}/g;

            var sanitized = template.replace(regex_1, function (_, match) {
                return `\$\{map.${match.trim()}\}`;
            });

            // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
            var regex_2 = /(\$\{(?!map\.)[^}]+\})/g;

            sanitized = sanitized.replace(regex_2, '');

            fn = Function('map', `return \`${sanitized}\``);
        }

        return fn;
    }

    return generateTemplate;
})();


// --- without caching ---
function generateTemplate(template) {

    // Replace ${expressions} (etc) with ${map.expressions}.
    var sanitized = template.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function (_, match) {
        return `\$\{map.${match.trim()}\}`;
    });

    // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
    sanitized = sanitized.replace(/(\$\{(?!map\.)[^}]+\})/g, '');

    return Function('map', `return \`${sanitized}\``);
}

log('--------- ex_2 ---------');

var generateGreetingString = generateTemplate('Hello world! My name is ${name}!');
var greetingText = generateGreetingString({ name: 'Joe'});
log(greetingText);