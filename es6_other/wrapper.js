
const url = require('url');
const http = require('http');

let Wrapper = function (options) {

    let obj = {};

    generateRequestList(obj, options, 'GET');
    //generateRequestList(obj, options.root, options.post, 'POST');

    return obj;
};

function generateRequestList(obj, options, type){

    let paths = options.get || options.post;

    if(!(obj && options.root && paths && type)){
        throw new Error('[generateRequestList] Not all arguments passed to function!');
    }

    if(type == 'GET'){
        for(let key in paths){
            if(!paths.hasOwnProperty(key)) continue;
            obj[key] = generateGetMethod(options.root, paths[key], options.parseJson);
        }
    }

    if(type == 'POST'){
        for(let key in paths){
            if(!paths.hasOwnProperty(key)) continue;
            obj[key] = generatePostMethod(options.root, paths[key], options.parseJson);
        }
    }
}

function generateGetMethod(root, path, parseJson){

    if(!(root && path)){
        throw new Error('[generateGetMethod] No path provided!');
    }

    var templateFunction = generateTemplateFunction(path);

    return function(obj, callback){
        // here we call ajax call
        ajaxCall(root, templateFunction(obj), parseJson, callback);
    };
}

function ajaxCall(root, path, parseJson, callback){

    let options = {
        host: "moex.com",
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Chrome/54.0.2840.59 Safari/537.36'
        }
    };

    options.host = root;
    options.path = path;

    let request = http.get(options, (res) => {
        let bodyChunks = [];

        res.on('data', (chunk) => {
            bodyChunks.push(chunk);
        });
        res.on('end', () => {
            let data = Buffer.concat(bodyChunks);

            data = data.toString('utf-8');
            data = parseJson ? JSON.parse(data) : data;

            callback(data);
        });

    });

    request.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
}



// ---- helper ----
function generateTemplateFunction(template) {

    // Replace ${expressions} (etc) with ${map.expressions}.
    var sanitized = template.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function (_, match) {
        return `\$\{map.${match.trim()}\}`;
    });

    // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
    sanitized = sanitized.replace(/(\$\{(?!map\.)[^}]+\})/g, '');

    return Function('map', `return \`${sanitized}\``);
}


// ---- main ----
let engineConnector = Wrapper({
    root: 'www.moex.com',
    parseJson: true,
    get: {
        list: '/iss/engines.json',
        single: '/iss/engines/${engine}.json'
    }
});

engineConnector.single({engine: 'stock'}, (res)=>{
    console.log(res);
});

