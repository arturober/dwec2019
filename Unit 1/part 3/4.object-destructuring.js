class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

function printUserData({ id, name, email }, otherInfo) {
    console.log(`${id}: ${name} (${email}) -> ${otherInfo}`);
}

let user = new User(3, "Peter", "peter@gmail.com");
printUserData(user, "He's not too smart");
console.log(user);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [...a1, ...a2, 7, 8, 9];
console.log(a3);

function configGame(options) {
    let defaults = {
        name: "Player 1",
        level: 1,
        difficulty: "normal",
        genre: "female"
    };

    let config = { ...defaults, ...options };
    console.log(config);
}
let options = {
    name: "Killer Master",
    genre: "male"
};
configGame(options); // {name: "Killer Master", level: 1, difficulty: "normal", genre: "male"}
