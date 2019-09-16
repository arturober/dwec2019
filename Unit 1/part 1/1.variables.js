'use strict';

let v1 = 12;
let v2 = "asdf";

console.log(typeof v1); // number
console.log(typeof v2); // string

v1 = true;
console.log(typeof v1); // boolean

v1 = [1, 2, 3];
console.log(typeof v1); // object
console.log(v1 instanceof Array); // true

let novalue;
console.log(novalue); // undefined

// a = "asdf"; -> Uncaught ReferenceError: a is not defined



