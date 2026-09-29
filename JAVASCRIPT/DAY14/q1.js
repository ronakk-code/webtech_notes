// largest Number

let a = 10;
let b = 20;

let largest = a>b ? a:b
console.log(largest);

//leap year or not

let year = 2024;
let leap = year % 4 == 0 ? "leap year":"not leap year"
console.log(leap);

//string is palidrome

let string = "MADAM"
let reverse = string.split().reverse().join()

let palidrome = reverse === string ? "string is palidrome":"string is not palidrome"
console.log(palidrome);

//find address who name is ronakk

const employees = [
    {id:1,name:"ajay",address:"indore"},
    {id:2,name:"jay",address:"ujjain"},
    {id:3,name:"ronakk",address:"bhopal"}
]

let result =  employees.find(employee => employee.name === "ronakk")
console.log(result.address);

//armstrong number

let num = 153;
let sum = 0;
let original = num;

while(num>0){
    let digit = num % 10;
    sum = sum + digit*digit*digit;
    num = Math.floor(num/10);
}

let arm = sum===original ? "no. is armstrong":"no. is not armstrong"
console.log(arm);

//occurence of each element

let arr = [1,2,3,3,4,2,1,5,6]

for (let i=0;i<arr.length;i++){
    let count = 0;

    for (let j=0;j<arr.length;j++){
        if (arr[i] == arr[j] && i>j){
            break;
        }
        if (arr[i] == arr[j]){
            count++;
        }
         
    }
    console.log(arr[i]+ "occurence" , count);
}



 