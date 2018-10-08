
console.log('module.exports at the beginning of module execution');
console.log(module.exports);


let x = 1; // private to the module
let y =2;
    
let add = (a,b) => a+b;
let multiply = (a,b) => a*b; 

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

module.exports={
    x,
    add,
    Person
}
global.y=y; // y becomes global variable