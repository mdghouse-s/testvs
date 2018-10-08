function add(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            process.nextTick(() => {
                reject(new Error("either a or b is not a number"))
            })
        }
        //const result = a + b;
        setTimeout(() => {
            const result = a + b;
            resolve(result);
        }, 2000);

    })
}

function square(a) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number') {
            reject(new Error("a should be a number")); // reject is async
        }

        setTimeout(() => {
            const result = a * a;
            resolve(result);
        }, 2000);
    });
}

function cube(a) {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number') {
            reject(new Error("a should be a number")); // reject is async
        }

        setTimeout(() => {
            const result = a * a * a;
            resolve(result);
        }, 2000);
    });
}

//promise has 3 states :- unfulfilled/unresolved, resolved, rejected

const promise1 = add(4, 3);
promise1
    .then(result => { // called when promise is resolved
        console.log("result inside the handler " + result);
        return "testing"
    })
    .then(result1 => {
        //throw new Error("fun");
        console.log("result from promise2 : " + result1)
    }).catch(err => {
        console.log(err.message);
    })

add(5, 4)
    .then(result => {
        console.log("result from add" + result)
        return square(result);
    })
    .then(result => console.log(result))
    .catch(err => console.log(err.message))

Promise.all([square(2), cube(3)
])
    .then(results => {
        console.log(results)
    })
    .catch(err => {
        console.log(err.message);
    })