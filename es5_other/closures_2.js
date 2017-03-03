
var log = console.log;

function parseFunction(str){
    let args = str.substring(0, str.indexOf(')'));
    args = args.substring(str.indexOf('(') + 1).trim().split(',');

    let code = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}')).trim();

    return new Function(args, code);
}

var obj = {
    returnGreetingFunction: function(){

        var that = this;
        self = this;

        console.log(self);
        console.log(that);

        // ---- VERSION 1. NOT WORK ----
        if(false){
            return function(text){
                var greet = that.GREETING;
                console.log(greet + text);
            };
        }

        // ---- VERSION 2. WILL WORK ----
        if(true){
            return function(text){
                var greet = self.GREETING;
                console.log(greet + text);
            };
        }

    },
    GREETING: 'Greeting, '
};


var greetingFunction = obj.returnGreetingFunction();

var text = greetingFunction.toString();

greetingFunction = parseFunction(text);

//console.log(greetingFunction.toString());

greetingFunction('BINGO!');
