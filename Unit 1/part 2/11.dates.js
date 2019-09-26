const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let dayWeek = DAYS[date.getDay()];
let month = MONTHS[date.getMonth()];

console.log(`Today is ${dayWeek}, ${date.getDate()} - ${month} - ${date.getFullYear()}`);

date.setMonth(date.getMonth() - 2);
date.setDate(date.getDate() - 5);
console.log(date.toLocaleString());

