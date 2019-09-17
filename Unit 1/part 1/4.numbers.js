console.log(0.000005345.toExponential()); // 5.345e-6
console.log(4.34526346346.toFixed(2)); // 4.35
console.log((5).toFixed(2)); // 5.00
console.log(Math.PI.toFixed(4));

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 2); // Infinity
let huge = Number.MAX_VALUE * 2;
console.log(Number.isFinite(huge)); // false

// let num = Number.parseFloat(prompt("Dime un número"));
// console.log(num); 
// console.log(Number.isNaN(num));

let n1 = "24";
let n2 = 35;

console.log(n1 * n2); // 840
console.log(n1 + n2); // 2435
console.log(Number.parseInt(n1) + n2); // 59
console.log(Number(n1) + n2); // 59
console.log(+n1 + n2); // 59

let value; // Value not assigned (undefined)
console.log(value + " - " + typeof value); // Prints undefined
value = null;
console.log(value + " - " + typeof value); // Prints object
console.log(null == undefined); // true
console.log(null === undefined); // false

"asdfsd".length
