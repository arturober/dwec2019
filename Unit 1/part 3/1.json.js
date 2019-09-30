let obj = new Object();
obj.name = "Peter";
obj["age"] = 17;
obj.toString = function () {
    return `${this.name}: ${this.age}`;
};
console.log(obj);
console.log(obj.toString());

let objJson = {
    name: "Peter",
    age: 17,
    toString() {
        return `${this.name}: ${this.age}`;
    }
};
console.log(objJson);
console.log(objJson.toString());

let person = {
    name: "Peter",
    age: 41,
    jobs: [ // jobs is an array of objects JSON)
        {
            description: "Circus clown",
            duration: "2003-2005"
        },
        {
            description: "Chicken sexer",
            duration: "2005-2015"
        }
    ]
}

console.log(person.jobs[1].description);
