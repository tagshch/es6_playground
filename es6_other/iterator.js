let log = console.log;

// STEP 1

let concatAll = multiArray => multiArray.reduce((agg, item) => {
    return agg.concat(item);
}, []);


let multiArr = [[1, 2], [3], [], [4]];

let flatArr = concatAll(multiArr);

// STEP 2

let getIterator = arr => {
    let _iteration = 0, _limit = arr.length, _result;
    return {
        next: () => {

            _result = {done: true};

            if (_iteration < _limit) {
                _result = {
                    value: arr[_iteration++],
                    done: false
                };
            }

            return _result;
        },
        prev: () => {

            _result = {done: true};

            if (_iteration > 0) {
                _result = {
                    value: arr[--_iteration],
                    done: false
                };
            }

            return _result;
        }
    }
};

let iterator = getIterator(flatArr);

log(iterator);