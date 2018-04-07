const fs = require('fs');
const path = require('path');

var file = fs.readFileSync(path.resolve(__dirname,'./fs-test.js'), {encoding: 'utf8'});
console.log(file.split('\n'));

var re = /(?:var)\s+([\w\d-]+)/g;

for ( var match; match = re.exec(file); ) {
    console.log(match[1]);
}