function mergeObjects(){

    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function(all, one){
        return Object.assign(all, one);
    }, {});
}

var merged = mergeObjects({ bingo: true }, { bongo: true }, { bingo: false}, {});

console.log(merged);