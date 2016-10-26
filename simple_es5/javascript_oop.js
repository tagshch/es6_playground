
/*===== PROTOTYPE OOP =====*/

function Animal(){
  this.height = 50;
}

function Human(){
  this.height = 150;
}

Animal.prototype.rise = function(power){
  this.unrise(power);
}

Animal.prototype.unrise = function(power){
  this.power = power;
  console.log('===========================');
  console.log('unrise:')
  console.log(this.height, this.power);
}

Human.prototype = Object.create(Animal.prototype);

var Gepard = new Animal();
var John = new Human();

// Gepard.rise(20);
// John.rise(150);


/*===== FUNCTIONAL OOP =====*/

function Machine(){
  this.getEnergyLevel = function(){
    console.log('Machine energy level...');
  }
}

function CoffeeMachine(){
  Machine.call(this);
}

var cm = new CoffeeMachine();
cm.getEnergyLevel();


/*===== HOW TO CREATE CLASS (FUNCTIONAL OOP, PROTOTYPE OOP) =====*/

var MediaInterface = (function(){
    function MediaInterface(){}

    MediaInterface.prototype.init = function(){
        console.log('Prototype oop');
    }
    return MediaInterface;
})();

var ParamInterface = (function(){
    function MediaInterface(){
        this.init = function(){
            console.log('Media Interface functional oop');
        }
    }
    return new MediaInterface();
})();


/*

function Animal(){
  this.height = 50;
}

function Human(){
  this.height = 150;
}

Animal.prototype.rise = function(power){
  this.unrise(power);
}

Animal.prototype.unrise = function(power){
  this.power = power;
  console.log('======== animal.unrise ========');
  console.log('Height:', this.height, 'Power:', this.power);
}

Human.prototype = Object.create(Animal.prototype);

var Gepard = new Animal();
var John = new Human();

Gepard.rise(20);
John.rise(150);
*/

/*
var Test1 = {
  nose : true,
  ear : false,
  height : 180
}

var Test2 = Object.assign({},Test1);

console.log(Test2);

      
function Stats(){};

Stats.prototype.test = function(){
  console.log('test function...');
  this.unload();
}

Stats.prototype.load = function(){
  console.log('load function...');
}

Stats.prototype.unload = function(){
  console.log('unload function...');
  this.load();
}

var Stat = new Stats();
          
Stat.test();
Stat.load();

console.log('=======================')

*/

/*
var Stats = (function(){
  
  function Stats(){
    
  };
  
  Stats.prototype.test = function(){
    console.log('test');
  }
  
  Stats.prototype.run_test = function(){
    console.log('run_test');
    this.test();
  }
  
  Stats.prototype.nmb = 12;

  //return Stats;
  //return new Stats();
  
})();

Stats.prototype.test();
Stats.run_test()
*/

/*
var obj = [];
obj['a'] = 1;
obj['b'] = 2;
console.log(obj);
 */

//var log = console.log.bind(console);

/*
var asd = new function(){
  this.sad = function(){
    console.log('sad');
  }
};

console.log(asd.sad())
*/


/*===== PROTOTYPE INHERITANCE =====*/

/*
function Parent(){
  this.type = 'Parent';
}
Parent.prototype.run = function(){
  console.log('Parent run!');
}

function Child(){
  this.type = 'Child';
  Parent.call(this);
}
Child.prototype.say = function(){
  console.log(('Run, you fools!'));
}

Child.prototype = Object.create(Parent.prototype);

var c = new Child();
c.run();
console.log(c.type);
*/




/*===== FUNCTIONAL INHERITANCE =====*/


var a = function(){
  
  b.call(this);
  
  this.say_a = function(){
    console.log('a_say');
  }
};

var b = function(){
  
  this.say_b = function(){
    console.log('b_say');
  }
};


var _res = (function(){
  
  function Result(){
    
    
  	a.call(this);
    
    this.say_c = function(){
      console.log('c_say');
    }
  }
  
  return new Result();
  
})();

console.log('=========')


/* ========= ES6 PRIVATE PROPERTIES ==========*/
/*
class Animal{
  
  constructor(){
    this._map = new Map();
  }
  
  _set(key, value){ this._map.set(key, value); }
  _get(key){ console.log('Key:', key,'| Value:', this._map.get(key)); }
 
}

var me = new Animal();

me._set('type','Rabbit');
me._get('type');
*/

/* ========= OVERLOAD METHOD  ==========*/

/*
var Person = function(){
  this.argv = arguments;
}

Person.prototype = {
  get_status: function(){
    log('[STATUS]:', this.argv);
  },
  dance: function(){
    log('Dance, Person!');
  }
}

var Employee = function(){
  Person.apply(this, arguments);
};

Employee.prototype = {
  get_status: function(){
    Person.prototype.get_status.apply(this, arguments);
    this.get_status();
  },
  dance: function(){
    Person.prototype.dance.apply(this, arguments);
    this.dance();
  }
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Person;

var p = new Employee('01', 'Carl', '25','1000$');
p.dance();
*/

//=======================







