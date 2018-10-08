function add(a,b,cb){
    setTimeout(()=>{
        const result = a + b;
        return cb(result)
    });
}

function square(a,cb){
    setTimeout(()=>{
        const result = a * a;
        return cb(result)
    });
}

//Disadvantages of Call back
//1. call back hell
//2. security - function is passed to another library
