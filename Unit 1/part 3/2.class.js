class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `${this.name}: ${this.price}`;
    }
}

let p = new Product("Chair", 40);
console.log(p.name);
console.log(p.price);
console.log(p.toString());


