
var stringToFunction = function (str) {
    var args = str.substring(0, str.indexOf(')'));
    args = args.substring(str.indexOf('(') + 1).trim().split(',');

    var code = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}')).trim();

    return new Function(args, code);
};

var stringToFunction_2 = function(str){
    var funcReg = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gmi;
    var match = funcReg.exec(str.replace(/\n/g, ' '));
    if (match) return new Function(match[1].split(','), match[2]);
    return null;
};

var stringToFunction_3 = function(str){
    return new Function("return " + str)();
};

var stringToFunction_4 = function(str){
    return eval('(' + str + ')');
};