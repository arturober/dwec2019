'use strict';

let text = "I am an amazing mammal, and it's 8am";
let search = "am";

let pos = 0;
while(pos != -1) {
    pos = text.indexOf(search, pos);
    if(pos != -1) {
        console.log("Found at position: " + pos);
        pos++;
    }
}

console.log(text.match(/am/g).length); // 4

console.log(text.slice(8, 15)); // Prints "amazing"
console.log(text.startsWith("I am")); // true

console.log("asdf".repeat(6));

console.log("Monkey: \u{1f435}");
console.log("Cat: \u{1f431}");
console.log("Cat: 🐱🐱🐱🐱🐱🐱🐱🐱🐱");

console.log("12" > 9);

