class User {
    static ROLES = ["user", "guest", "admin"];

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello from ${this.name}`);
    }

    sayType() {
        console.log("I'm a user");
    }

    static checkValidRole(role) {
        return this.ROLES.includes(role);
    }
}

class Admin extends User {
    constructor(name) {
        super(name); // User constructor
    }

    sayType() { // Overriding method
        super.sayType(); // Calling User.sayType
        console.log("But also an admin");
    }
}

let admin = new Admin("Anthony");
admin.sayHello(); // Prints "Hello from Anthony"
admin.sayType(); // Prints "I'm a user" and "But also an admin"
console.log(User.checkValidRole("newbie"));
console.log(User.checkValidRole("admin"));
