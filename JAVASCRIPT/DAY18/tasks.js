// Write a JavaScript program to find the largest element in an array.

let arr = [100,200,300,400]
let max = 0;

for(let i=0;i<=arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max);


//Write a program to find the sum and average of all elements in an array.

let arr1 = [1,2,3,4,5,6];
let sum = 0;

for(let i=0;i<arr1.length;i++){
    sum = sum + arr1[i];
}
let avg = sum/arr.length;


console.log("sum", sum);
console.log("avg" , avg);


//Write a program to find the frequency of each element in an array.

let arr2 = [1,2,3,4,5,6]

for(i=0;i<arr2.length;i++){
    let count = 0;

    for(j=1;j<arr2.length;j++){
        if(arr2[i] == arr2[j] && i>j){
            break;
        }

        if(arr2[i] == arr2[j]){
            count++
        }
    }
    console.log(arr2[i]+"occurence", count);
    
}

//Write a JavaScript program to reverse a string without using reverse()

let string = "ronakk";
let rev = "";

for(i=0;i<string.length;i++){
    rev=string[i]+rev;
}
console.log(rev);

//Write a program to reverse an array without using reverse().

let arr3 = [1,2,3,4,5,6,7];
let rev1 = [];

for(i=0;i<arr3.length;i++){
    rev1.unshift(arr3[i]);
}
console.log(rev1);

//Write a program to find the first non-repeating character in a string.

let str = "rroonnakk"
for(let i=0;i<str.length;i++){
   let count=0;
    for(let j=0;j<str.length;j++){
        if(str[i]==str[j]){
        count++;
    }
}
        if(count==1){
            console.log("first non repeating character is" , str[i]);
        break;
        }
}


let students = [
    {
        id: 101,
        name: "Rahul",
        age: 20,
        course: "Java",
        marks: 85
    },
    {
        id: 102,
        name: "Priya",
        age: 21,
        course: "Python",
        marks: 72
    },
    {
        id: 103,
        name: "Amit",
        age: 20,
        course: "Java",
        marks: 91
    }
];

// Write a program to calculate the average marks of a student using an object

let totalmarks=0;
for(let i=0;i<students.length;i++){
    totalmarks = totalmarks+students[i].marks;
}

average = totalmarks / students.length;
console.log(average);

console.log(totalmarks);

//find the student who has the highest marks.

let max1 = 0;
for(let i=0;i<students.length;i++){
    students[i]>max1;
    max1 = students[i]; 
}
console.log(max1.name);

// Write a program to find the total salary of all employees from an array of employee objects. 

let employees = [
    {
        id: 101,
        name: "Rahul",
        salary: 25000
    },
    {
        id: 102,
        name: "Priya",
        salary: 30000
    },
    {
        id: 103,
        name: "Amit",
        salary: 35000
    }
];

let totalsalary = 0;
for(let i=0;i<employees.length;i++){
    totalsalary = totalsalary + employees[i].salary;
}
console.log(totalsalary);


// Predict the output: 

console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

setTimeout(() => {
    console.log("Timer 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");


// Write a program to print all Prime numbers between 1 and 100.




