let log = console.log;

function buildURL(strArray, ...valArray) {
    return concatArr(strArray.raw, valArray);
}

function concatArr(path, val){
    let url = "";
    for(let i = 0; i < path.length; i++){
        if(val[i] == undefined){
            break;
        }
        url += path[i] + val[i];
    }
    return url;
}

var lang = "en-us";
var a = "library";
var b = "dn771551.aspx";


// Call the tagged template function.
var _url = buildURL`http://msdn.microsoft.com/${lang}/${a}/${b}`;
console.log(_url);