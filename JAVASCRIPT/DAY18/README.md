events loop :- asynchronus operation ko handle karta he or check karta he agr callstack empty he ya nhii or agr empty he toh next callback ko callstack me bhejna.

js mainly single threaded hoti he ek time pr ek hi code execute karti he but asynchronus code execute karna ho toh events loop use hota he usko manage karne ke liye.

callstack :- jaha javascript ke synchronus operation execute hote he.


declaration:-
function a(){

}
a();


expression:-
let sum = function(a,b){
    console.log(a+b);
}
sum(7,21)


object
class car{
    constructor(name,color,price){
    this.name = name;
    this.color = color;
    this.price = price;
    }
}
let c = new car("BMW","WHITE",1000000)
console.log(c);


spread:- do array ko add kar deta he (...spread)
rest:- operation apply karta he then rest ko vesa hi same rakh deta he (...rest)

local : data saved at local storage  (permanent , manually delete)
session:- data saved at session storage (temporary , automatically delete when tab is change or browser is close)

destructuring:- type elements from the array or object


const obj2 = JSON.parse(JSON.stringify(obj1))  convert from json to parse then json


deep copy :- outer array or function are independent to inner array or function changes in inside then outer can't affect. outer or inner ki different copies banti he. reference different. 

shallow copy :- outer array or function are dependent to inner array or function changes in inside can affect the outer. outer object ki new copy. reference same

hoisting :- hoisting means function execution se phle declare hota he

closure:- outer function execute ho chuka he uske baad bhi inner function usse yad rakhta he.


Event Loop :- Event loop is js mechanism , By using this we can handle the task asychrnously.
JS is a single threaded.

Mainly three types of things :-
1. Stack  - FILO or LIFO
2. Queue  - FIFO
3. Event loop -loop 

Mainly we have two type of task :- 
console.log("")
1. microtask :- Promises, Async and await ,queuemicrotask -> first priority 
2. macrotask :- settimeout and setinterval -> second priority

