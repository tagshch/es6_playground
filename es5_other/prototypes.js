var Human = function(){
  this.name = 'HUMAN';
  this.speak = function(){
  	console.log();
    console.log('I am '+this.name+' and i am speak!');
  }
};

var John = new Human();
John.speak();
