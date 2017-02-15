// is prototype?

var Human = function(){
  this.name = 'HUMAN';
  this.speak = function(){
  	console.log();
    console.log('I am '+this.name+' and i am speak!');
  }
};

var John = new Human();
John.speak();


// prototype v2

var Animal = (function(){

	// --- constructor ---
	function Animal(name){
		this.name = name;
	}

	// --- methods ---
	Animal.prototype.status = function(){
		console.log(this);
	}

	return Animal;
})();

var Jepard = new Animal('Joe');
var Cow = new Animal('Janna');

Jepard.status();
Cow.status();