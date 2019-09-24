// setTimeout(() => console.log("Hello"), 4000);
// console.log("World");

// function sayHello(name) {
//     console.log(`Hello ${name}!`);
// }
// setTimeout(sayHello, 5000, "John");

let num = 1;
let idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) { // When we print 10, we stop the timer from repeating anymore
        clearInterval(idInterval);
    }
}, 1000);


