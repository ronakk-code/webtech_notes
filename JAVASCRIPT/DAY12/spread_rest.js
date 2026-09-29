//spread

let arr = [1,2,3,4]
let arr1 = [5,6,7,8]
let arr_arr1 = [...arr , ...arr1]
console.log(arr_arr1);


const person= {
    name : "Ronakk",
    age : 18
}
const details= {
    address : "Indore",
    phone : 6269811708
}
const persondetails = {...person , ...details}
console.log(persondetails);

//rest

function demo(a,b,...rest){
    console.log(a+b);
    console.log(rest);
}
demo(10,20,30,40,50,60);


function sum(...numbers){
    return numbers.reduce((total=0,number)=> total+number)
}
console.log(sum(10,20,30,40,50,60,70));
