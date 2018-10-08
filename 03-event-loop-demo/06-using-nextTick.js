function add(a, b, cb) {
    if (typeof a != 'number' || typeof b != 'number'){ 
        process.nextTick(
            () => { throw new Error('error')}
        )} 
        return;
    }


    setTimeout(function () {
        res = a + b;
        cb(res)
    }, 2000)
}

function logResult(result) {
    console.log(result)
}

console.log("Sum : " + add(3, 5, logResult));
