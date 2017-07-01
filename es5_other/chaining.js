
var app = {
  sayHello: function(){console.log('hello!')},
  sayBingo: function(){console.log('bingo!')},
  sayBongo: function(){console.log('bongo!')}
}

var funcArr = ['sayHello','sayBingo','sayBongo'];

//funcArr.map(function(funcName){ app[funcName](); })

/* --- DATA HANDLE (without ajax or timeout) --- */

var data = {
  first: function(){
    this.props = { first: "bingo" };    
    return this;
  },
  second: function(){
    this.props.second = "bingo";
    return this;
  },
  last: function(){
    this.props.last = "bongo!";
    return this;
  }
};

data
  .first()
  .second()
  .last();

// console.log(data.props);


var myapp = {
  uno: function(url){
    setTimeout(function(){
      myapp.dos(url);
    },500);
  },
  dos: function(url){
    setTimeout(function(){
      myapp.tres(url);
    },500);
	},
  tres: function(url){
    console.log('app done!', url);
  }
}

// myapp.uno('url_it');

/* --- CHAINING --- */
var app = {
  init: function(queue){ 
    
    setTimeout(function(){
      console.log('app init!');
    	queue(0);  
    }, 500);
    
  },
  getData:function (queue){
  	
    setTimeout(function(){
    	console.log('getData');
    	queue(1);
  	}, 1000);
    
	},
  handleData:function(queue){
  	
    setTimeout(function(){
    	console.log('handleData');
    	queue(2);
  	}, 1000);
    
	},
  renderData:function (){
    
    setTimeout(function(){
      console.log('renderData');
    }, 1000);
    
  }
};

function queue(step){
  switch(step){
    case 0: app.getData( queue ); break;
    case 1: app.handleData( queue ); break;
    case 2: app.renderData(); break;
  }
};

app.init(queue);