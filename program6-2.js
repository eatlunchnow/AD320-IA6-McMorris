var fs = require('fs');

//module.exports = function(callback)

mod = function(dir, type, callback){
	var arr = [];
	
	fs.readdir(dir, type, function(err, data){
	if(err){
		return callback(err);
	} 
	
	for(var i = 0; i < data.length; i++){ 
		console.log(data[i]);
 }
		
	return callback(null, arr);
	
});
}