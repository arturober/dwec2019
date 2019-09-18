// let a = new Array(12); // Creates an array with 12 reserved positions
// console.log(a.length); // Prints 12
// a[10] = "Hello";
// a[20] = "world";
// console.log(a.length); // Now it prints 21 
// console.log(a);
// console.log(a.toString());

// let b = new Array("a", "b", "c", "d", "e"); // Array with 5 values
// console.log(b.toString());
// b.length = 2;
// console.log(b.toString());

let c = ["a", "b", "c", "d", "e"];
console.log(c instanceof Array); // true

for(let i in c) {
    console.log(`${i}: ${c[i]}`);
}

for(let val of c) {
    console.log(val);
}

let a = [];
a.push("a"); // Inserts values at the end of the array
a.push("b", "c", "d");
console.log(a.toString()); // Prints ["a", "b", "c", "d"]. If omit valueOf() here, it will get called automatically
a.unshift("A", "B", "C"); // Inserts new values at the beginning of the array
console.log(a.toString());
console.log(a.pop()); // Prints and removes the last position -> "d"
console.log(a.shift()); // Prints and removes the first position -> "A"
console.log(a.toString()); // Prints ["B", "C", "a", "b", "c"]

let names = ["John", "Peter", "Lisa", "Batman"];
console.log(names.join(" <==> "));

let array = ["a", "b", "c", "d", "e", "f"];
array.splice(2, 2);
console.log("" + array); // a,b,e,f
array.splice(1, 0, "A");
console.log("" + array); // a,A,b,e,f
array.splice(3, 2, "1", "2", "3");
console.log("" + array); // a,A,b,1,2,3

let nums = [20, 6, 100, 51, 28, 9];
nums.sort();
console.log(nums); // [100, 20, 28, 51, 6, 9]
nums.sort((n1, n2) => n1 - n2);
console.log(nums); // [6, 9, 20, 28, 51, 100]

//----------------------------------------

let nums2 = [2, 5, 8, 10, 13];
let nums3 = nums2.map(n => n * 2);
console.log(nums3); // [4, 10, 16, 20, 26]

let words = ["cat", "house", "head", "table", "escalator"];
let lengths = words.map(w => w.length);
console.log(lengths); // [3, 5, 4, 5, 9]

let longWords = words.filter(w => w.length >= 5);
console.log(longWords); // ["house", "table", "escalator"]

let sum = nums2.reduce((total, value) => total + value, 0);
console.log(sum);
let mult = nums2.reduce((total, value) => total * value, 1);
console.log(mult);
if(words.length) {
    let str = words.reduce((total, word) => total + " -*- " + word);
    console.log(str); // cat -*- house -*- head -*- table -*- escalator
}
