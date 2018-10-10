const path = require('path')

console.log(__dirname);
console.log(__filename);

const fileparts= path.parse(__filename);
console.log(fileparts);

console.log(fileparts.name)

console.log(path.join(__dirname,'tmp','test.txt'));