
var Planet = function(){
	
	if(typeof Planet.instance === 'object'){
		return Planet.instance;
	}

	this.form = 'round';

	Planet.instance = this;
};


var Earth = new Planet();
var Mars = new Planet();

console.log(Earth.form, Mars.form);
Earth.form = 'ellipsis';
console.log(Earth.form, Mars.form);

console.log(Planet);

