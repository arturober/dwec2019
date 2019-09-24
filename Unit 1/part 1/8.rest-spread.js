function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sumAll(2, 4));
console.log(sumAll(2, 4, 8, 12, 15));
console.log(sumAll());

let nums = [12, 32, 6, 8, 23];
console.log(Math.max(nums)); // Prints NaN (array is not valid)
console.log(Math.max(...nums)); // Prints 32 -> equivalent to Math.max(12, 32, 6 ,8 ,23)

let nums2 = [...nums];
nums2[0] = 0;
console.log(nums);
console.log(nums2);

// let n1 = nums[0];
// let n2 = nums[1];
let [n1, n2] = nums;

console.log(`${n1}, ${n2}`); // 12, 32

function printUserData([id, name, email], otherInfo = "None") {
    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Email: " + email );
    console.log("Other info: " + otherInfo );
}
let userData = [3, "Peter", "peter@gmail.com"];
printUserData(userData, "He's not too smart");

