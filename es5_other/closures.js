// CLOSURES

for(var i = 0; i < 10; i++){
  
  // ex_1
  (function(){
    var j = i;
  	setTimeout(function(){
    	console.log(j);
  	}, 1000)
  })();
 
  
  // ex_2
  logout(i, 2000);
  
}

function logout(nmb, timeout){
  setTimeout(function(){
    console.log(nmb);
  },timeout);
}











