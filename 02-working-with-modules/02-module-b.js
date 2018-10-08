const a = require('./01-module-a');

console.log(a);
console.log(a.x);
console.log('y : ' + global.y + 'direct y : '+y)
console.log(global);
console.dir(global,{
    depth:0
})