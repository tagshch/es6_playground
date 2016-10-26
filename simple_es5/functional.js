
var persons = [
	{ name: 'John', age: 42},
	{ name: 'Brian', age: 37},
	{ name: 'Dick', age: 18},
	{ name: 'Sam', age: 24}
];

var concatNames = persons.reduce(function(str, person){
	return str + ' ' + person.name;
}, "...");

var totalAge = persons.reduce(function(sum, person){
	return sum + person.age;
}, 0);

console.log(concatNames);
console.log(totalAge);