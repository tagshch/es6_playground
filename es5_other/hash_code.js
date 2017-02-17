

var hashCode = function(s){
    return s.split("").reduce(function (a, b) {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a
    }, 0);
};

var getHashCodeFromInputs = function () {
    var totalHash = 0;
    totalHash += hashCode($('input[name=name]').val());
    totalHash += hashCode($('textarea[name=description]').val());
    totalHash += hashCode(editorObject.getValue("\n"));

    return totalHash;
};


var str1 = 'Bingo!';
var str2 = 'Bongo!';
var str3 = 'bingo!';
var str4 = 'Bingo!';

var h1 = hashCode(str1);
var h2 = hashCode(str2);
var h3 = hashCode(str3);
var h4 = hashCode(str4);

var log = console.log;


log(h1, h2, h1 == h2);
log(h1, h3, h1 == h3);
log(h1, h4, h1 == h4);