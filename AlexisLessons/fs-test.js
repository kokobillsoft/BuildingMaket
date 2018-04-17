const fs = require('fs');
const path = require('path');

var file = fs.readFileSync(path.resolve(__dirname,'./0_519bfa73b73f474b8293e16e07b26a95_1.json'), {encoding: 'utf8'});
console.log(file.split('\n'));

var re = /(?:var)\s+([\w\d-]+)/g;

for ( var match; match = re.exec(file); ) {
    if ('287.90444336179286')
    console.log(match[1]);
}