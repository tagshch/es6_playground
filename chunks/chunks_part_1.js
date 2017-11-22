/* filter array by query params */
let items = [
    { firstName: 'Иван', lastName: 'Иванов', birthDate: '612997200000', id: '111222'},
    { firstName: 'Петр', lastName: 'Петров', birthDate: '612947200000', id: '222333'},
    { firstName: 'Сергей', lastName: 'Сергеев', birthDate: '612917200000', id: '333444'},
];

const compareObjectFields = (params, item) => {
    return Object.keys(params).some(key => {
        if(item.hasOwnProperty(key)){
       		return item[key].search(params[key]) >= 0;
        }
    });
}

const filter = (params, items) => {
    return items.filter(item => {
        return compareObjectFields(params, item);
    });
}

let params1 = { firstName: 'е' };
let params2 = { id: '33' };

let result1 = filter(params1, items);
let result2 = filter(params2, items);

console.log(result1);
console.log(result2);