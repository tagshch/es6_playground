

var log = console.log;
var str = 'http://site.com:81/path/page?a=1&b=2#hash';

/* 
// ---> ONLY FOR USE IN BROWSER <---

// ======= DOM - create element ========
function parseUrl(href){
    var _url = document.createElement('a');
    _url.href = href;
    return _url;
}
var url1 = parseUrl(str);

log(
    url1.href + '\n' +           // the full URL
    url1.protocol + '\n' +       // http:
    url1.hostname + '\n' +       // site.com
    url1.port + '\n' +           // 81
    url1.pathname + '\n' +       // /path/page
    url1.search + '\n' +         // ?a=1&b=2
    url1.hash                    // #hash
);

// ======= DOM - URL class =========
var url2 = new URL(str);

log(
    url2.href + '\n' +           // the full URL
    url2.protocol + '\n' +       // http:
    url2.hostname + '\n' +       // site.com
    url2.port + '\n' +           // 81
    url2.pathname + '\n' +       // /path/page
    url2.search + '\n' +         // ?a=1&b=2
    url2.hash                    // #hash
);

*/

// ======= NODE - URL class ========
const urlClass = require('url');
let link = urlClass.parse(str);
log(link);
