
process.nextTick(() => 
    console.log('1')
);

console.log('2');

process.nextTick(() => 
    console.log('3')
);

console.log('4');