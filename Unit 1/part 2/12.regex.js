let str = "I am amazed in America";
let reg = /am/gi;
let match;

while((match = reg.exec(str)) != null) {
    console.log(`Match: ${match[0]}, index: ${match.index}`);
}

console.log(str.match(reg)); // ["am", "am", "Am"]

let strnNums = "El número 1 es la mitad de 2 y la cuarta parte de 4";
let numReg = /\d+/g;

for(let i = 2; i <= 10; i++) {
    let res = strnNums.replace(numReg, num => +num * i);
    console.log(res);
}
