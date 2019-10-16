import {Person} from './person.class';
import {IPerson} from './person.interface';
import {IProduct} from './iproduct.interface';

let s: string;
s = 'asdf';

let s2 = 'Hello'; // string
// s2 = 25; // error

let v1: any;
v1 = 23;
v1 = "asdf";
v1 = true;

let v2; // any
v2 = "asdf";
v2 = [1,2,3];

function suma(n1: number, n2: number): number {
    return n1 + n2;
}

// let result = suma(); // Error
// let result = suma(2, 3, 4); // Error
// let result = suma("3", "5"); // Error

let as = ['s1', 's2', 's3']; // string[]
let num = 1;
// as.push(num); // error

let as2: string[] = [];
as2.push("Hello");

let p1: {name: string, age: number} = {
    age: 24,
    name: 'Peter'
};

let p2: Person = new Person('Peter', 24);

let p3: IPerson = {
    age: 24,
    name: 'Peter'
};

let f: (str: string, num: number) => string;
f = (s, n) => {
    let result = "";
    for(let i = 0; i < n; i++)
        result += s;
    return result;
}

console.log(f("pa", 6));

let person = new Person("Martha", 25);
// person.name; // Error -> private
console.log(person.getName());

// let input = <HTMLInputElement>document.getElementById('input1');
let input = document.getElementById('input1') as HTMLInputElement;
input.value = 'Hello';

let valueInput = (document.getElementById('input1') as HTMLInputElement).value;

let prod: IProduct = {
    name: "Product 1",
    price: 25,
    id: 1
};
