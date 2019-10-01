function addPromise(n1, n2) {
    return new Promise((resolve, reject) => {
        if(isNaN(n1) || isNaN(n2)) {
            reject("Numbers are not valid");
        }
        setTimeout(() => {
            resolve(n1 + n2);
        }, Math.floor(Math.random() * 3000 + 1000)); 
    });
}

let p1 = addPromise(3, 5);
let p2 = addPromise(7, 7);
let p3 = addPromise(1, 2);

Promise.race([p1, p2, p3]).then(result => console.log(`Race winner: ${result}`));
Promise.all([p1, p2, p3]).then(result => console.log(`All results: ${result}`));
