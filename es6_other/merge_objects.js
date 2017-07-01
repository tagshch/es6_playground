function mergeObjects(){

    let args = Array.prototype.slice.call(arguments);

    return args.reduce(function(all, one){
        return Object.assign(all, one);
    }, {});
}

let merged = mergeObjects({ uno: { bingo: [1,2] } }, { bongo: true }, { uno:{ bingo: [3,4,5] }}, {});

console.log(merged);