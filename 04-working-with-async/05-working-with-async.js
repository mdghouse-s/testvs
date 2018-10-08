const async = require('async');

function square(a,cb){
    if (typeof a != 'number') {
        throw new Error("a should be a number");
    }

    setTimeout(()=>{
        const result = a * a;
        return cb(null,result)
    });
}

function cube(a,cb){
    if (typeof a != 'number') {
        throw new Error("a should be a number");
    }

    setTimeout(()=>{
        const result = a * a * a;
        return cb(null,result)
    });
}

async.waterfall(
    [
    (done)=>{
        square(7,done)
    }, 
    (result, done)=>{ 
        cube(result,done)
    }],
    function(err, result){
        console.log(result)
    }
)

//async.parallel - execute async multiple tasks in parallel
//async.series - execute in sequence, result of one is not used in next call
