// const person = {
//     name1 : "ronakk",
//     age : 18
// }
// console.log(person);
// console.log(person.name1);

// //MODIFICATION ON THE OBJECT
// //ADD KEY  VALUES
// person.address = "indore";
// console.log(person);

// //update key values
// person.address = "sanawad";
// console.log(person);

// //delete key values
// delete person.age;
// console.log(person);

// //METHOD OF OBJECT
// const person1 = {
//     name1:"ronakk",
//     age:18
// } 
// console.log(Object.keys(person1));
// console.log(Object.values(person1));
// console.log(Object.entries(person1));

// //FREEZE
// Object.freeze(person)
// person.age = 24;
// console.log(person);

// //BLUEPRINT
// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// let p1 = new person("ronakk",24)
// let p2 = new person("ram",19)
// console.log(p1.name);
// console.log(p2.age);


//============================================================

// AFTER ES6

class car{
    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price;
    }
}
let c = new car("BMW","WHITE",10000000)
let c1 = new car("FORTUNER","BLACK",4000000)

console.log(c.name);
console.log(c1.color);












