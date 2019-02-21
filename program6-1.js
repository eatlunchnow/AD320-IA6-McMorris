/*I gave up on exercise 6. The code won't compile and I don't know why*/

var mod = require('./program6-2');

var dir = process.argv[2];
var type = '. ' + process.argv[3];

mod(dir, type, function(err, data){
	if(err){
		return err;
	}
	console.log();
});

