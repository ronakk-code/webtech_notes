const obj1 = {
    name1 : "ronakk",
    address : {
        city : "indore"
    }
}

const obj2 = JSON.parse(JSON.stringify(obj1))

console.log(obj1.name1);
console.log(obj2.name1);
console.log(obj1.address.city);


obj1.address.city = "bhopal"
console.log(obj2.address.city);
console.log(obj1.address.city);
