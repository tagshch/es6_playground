
var str = 'abc';
//var str = 1;
//

function checkStrSlow(str){
  return new Promise(function(resolve, reject){
  	setTimeout(function(){
      if(typeof str == 'string'){
      	resolve(str);
    	} else {
      	reject(str);
    	}
    }, 1000);
  });
}

function checkStrFast(str){
  return new Promise(function(resolve, reject){
      	setTimeout(function(){
      		if(typeof str == 'string'){
      			resolve(str);
    			} else {
      			reject(str);
    			}
    		}, 500);
  });
}

var pr = checkStrFast(str);

pr.then(
  function(res){
    console.log('================');
  	console.log('Success:', res);
  	return res + '!!!';
	},
  function(err){
  	console.log('Error:',err);
	}).
	then(function(res){
 		console.log(res + 'BINGO!');
  	return checkStrSlow(res); // will work
	})
	.then(function(res){
  	console.log(res + 'BINGO2!');
  	return checkStrFast(res);
	})
	.then(function(res){
					console.log(res + 'BINGO3!');
				},
    		function(err){
  			console.log(err)
				});




