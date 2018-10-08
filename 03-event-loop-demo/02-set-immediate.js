//setimmediate is a non blocking function

setImmediate(
    ()=>console.log('1')
    ); 

console.log(2);
setImmediate(
    ()=>console.log('3') // execute function after 3 sec if runtime is free
    ); 

console.log(4);