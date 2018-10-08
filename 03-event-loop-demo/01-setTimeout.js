//setTimeout is a non blocking function

setTimeout(
    ()=>console.log('1'),
    3000    // execute function after 3 sec if runtime is free
    ); 

console.log(2);
setTimeout(
    ()=>console.log('3'),
    0    // execute function after 3 sec if runtime is free
    ); 

console.log(4);