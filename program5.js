var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var type = '.' + process.argv[3];




fs.readdir(dir, function callback(err, data){
	if(err){
		console.log(err);
	} 
	
	for(var i = 0; i < data.length; i++){ 
		if (data[i].match(type)){
		console.log(data[i]);
	}
 }
	
});