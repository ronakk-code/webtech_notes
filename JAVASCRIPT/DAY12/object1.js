// Q1. find the address whose name is jayesh
let data = [
   {name:"raja",id:1,address:"Indore"},
   {name:"jayesh",id:2,address:"rau"},
   {name:"khusi",id:3,address:"Bhopal"}
]
let result = data.find(user=> user.name="jayesh")
console.log(result.address);

// =======================================================================

// 2. Find All Employees from Indore

// An HR system stores employee details. Display all employees whose city is "Indore".

let employees = [
  { id: 101, name: "Raj", city: "Indore" },
  { id: 102, name: "Ankit", city: "Bhopal" },
  { id: 103, name: "Priya", city: "Indore" },
  { id: 104, name: "Neha", city: "Delhi" }
];
let result1 = employees.filter(employee => employee.city ==="Indore")
console.log(result1);
console.log(result1[0].name);
console.log(result1[1].name);
for(let i=0;i<result1.length;i++){
    console.log(result1[i].name);
    
}



//==============================================================================

//3. Increase Salary by 10%
// A company wants to give every employee a 10% salary hike. Update the salary of every employee.

let employees1 = [
  { id: 1, name: "Raj", salary: 30000 },
  { id: 2, name: "Aman", salary: 45000 },
  { id: 3, name: "Priya", salary: 50000 }
];

let map1 = employees1.map(employee=> {
    return{
        ...employee,
        salary: employee.salary+employee.salary*10/100
    }
})
console.log(map1);

//======================================================================================

// 4. Find the Most Expensive Product

// An e-commerce website stores product details. Find the product with the highest price.

let products = [
  { id: 1, name: "Laptop", price: 60000 }, // max
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Mobile", price: 25000 },
  { id: 4, name: "TV", price: 70000 }
];

//with method
let Expensiveproduct = products.reduce((max,product)=>{
    return product.price > max.price ? product : max;
})
console.log(Expensiveproduct);

//for loop
let Expensiveproduct1 = products[0];
for(let i=1 ; i<products.length;i++){
    if(products[i].price > Expensiveproduct1.price){
        Expensiveproduct1 = products[i].price
    }
}
console.log(Expensiveproduct1);

//==================================================================

// 5. Find Pending Tasks

// A task management application stores task details. Display only the tasks that are not completed.

let tasks = [
  { id: 1, title: "Learn JavaScript", completed: true },
  { id: 2, title: "Build Todo App", completed: false },
  { id: 3, title: "Practice Arrays", completed: false },
  { id: 4, title: "Learn React", completed: true }
];

let result2 = tasks.filter(task => task.completed === false);
console.log(result2);

//===========================================================================

// 6. Total Amount Spent by Rahul
// Question :- 

let orders = [
  { id: 1, customer: "Rahul", amount: 1200 },
  { id: 2, customer: "Aman", amount: 800 },
  { id: 3, customer: "Rahul", amount: 2500 },
  { id: 4, customer: "Neha", amount: 1500 },
  { id: 5, customer: "Rahul", amount: 1000 }
];

let result3 = orders.filter(order => order.customer === "Rahul")
                    .reduce((sum,order1)=> sum + order1.amount,0)
                    console.log(result3);
                    


 