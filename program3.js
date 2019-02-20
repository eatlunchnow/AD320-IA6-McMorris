/*
synchronous - reads code from top to bottom
var fs = require('fs') - standard making the variable as the same name as the module, put it in paranthesis - global module 
*/
var fs = require('fs');

var filePath = process.argv[2];

var buffobj = fs.readFileSync(filePath);

var str = buffobj.toString();

console.log(str.split('\n').length - 1);

