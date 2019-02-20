var fs = require('fs');

var filePath = process.argv[2];

var buffobj = fs.readFileSync(filePath);

var str = buffobj.toString();

console.log(str.split('\n').length - 1);

