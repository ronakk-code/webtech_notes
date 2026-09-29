// //For each method 

// let arr9 = [1,2,3,4,5,6,7,8]

// arr9.forEach((value,index,array)=>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })

// //for of method

// let arr10 = [1,2,3,4,5,6,7,8]

// for(let value of arr10){
//     console.log(value);
// }

// let str = "debugshala";

// for(let value of str){
//     console.log(value);
// }

// //For in methods
// let arr11 = [1,2,3,4,5,6,7,8]

// for(let i in arr11){
//     console.log(i);
// }

// let person = {
//     name : "ronak",
//     age : 18,
//     address : "indore"
// }
// for(let keys in person){
//     console.log(keys);
// }

// //Map method

// let arr12 = [1,2,3,4,5,6,7,8]

// let map1 = arr12.map((value)=>{
//     return value*2
// })
// console.log(map1);

// //Reduce method

// let arr13 = [1,2,3,4,5,6,7,8]

// let red = arr13.reduce((total,value)=>{
//     return total+value;
// },0)
// console.log(red);

// //Filter method

// let arr14 = [1,2,3,4,5,6,7,8]

// let fil = arr14.filter((value)=>{
//     return value%2==0;
// })
// console.log(fil);

// //Find method

// let arr15 = [1,2,3,4,5,6,7,8]

// let fin = arr15.find((value)=>{
//     return value%2==0
// })
// console.log(fin);

// //Some method

// let arr16 = [1,2,3,4,5,6,7,8]

// let som = arr16.some((value)=>{
//     return value%2==0
// })
// console.log(som);

// let arr17 = [1,3,5,7,9,11]

// let fin1 = arr17.some((value)=>{
//     return value%2==0
// })
// console.log(fin1);

// //Every method

// let arr18 = [1,2,3,4,5,6,7,8]

// let evry = arr17.every((value)=>{
//     return value%2==0
// })
// console.log(evry);

// //Reverse method

// let arr19 = [1,2,3,4,5,6,7,8]
// console.log(arr19.reverse());

// //Sort method

// let arr20 = [4,2,5,6,1,3,8,7]

// let srt = arr20.sort((a,b)=>{
//     return a-b;
// })
// console.log(srt);

// let arr21 = [4,2,5,6,1,3,8,7]

// let srt1 = arr21.sort((a,b)=>{
//     return b-a;
// })
// console.log(srt1);

// //Findindex method

// let arr22 = [1,2,3,4,5,6,7,8]

// let finind = arr15.findIndex((value)=>{
//     return value%2==0
// })
// console.log(finind);

// //Flat method

// let arr23 = [1,2,3,["hyy","byy",4,[100]]]
// let flt = arr23.flat(Infinity)
// console.log(flt);

// //Bubble sort

// let arr24 = [1,5,4,2,8,3]

// for(let i=0;i<arr24.length;i++){
//     for(let j=0;j<arr24.length-1;j++){
//         if (arr24[j]>arr24[j+1]){
//             let temp = arr24[j];
//             arr24[j] = arr24[j+1];
//             arr24[j+1] = temp;
//         }
//     }
// }
// console.log(arr24);

// Q1 . find the occurrence/frequency of each element?


let arr25 = [1,3,1,4,6,5,7,2,6,7,8,3]

for(let i=0;i<arr25.length;i++){
    let count = 0;

    for(let j=0;j<arr25.length;j++){

        if (arr25[i]==arr25[j] && i>j){
            break;
        }
        if(arr25[i]==arr25[j]){
            count++;
        }
    }
    if(count>0){
console.log(arr25[i] +"occurrence is" , count);
}
}

//Q2. Find the duplicate element from the array?

let arr26 = [1,3,1,4,6,5,7,2,6,7,8,3]

for(let i=0;i<arr26.length;i++){
    let count = 0;

    for(let j=0;j<arr26.length;j++){

        if (arr26[i]==arr26[j] && i>j){
            break;
        }
        if(arr26[i]==arr26[j]){
            count++;
        }
    }
    if(count>1){
console.log(arr26[i] +"duplicate element");
}
}

//Q3. Find the maximum element

let arr27 = [1,5,23,7,21,98,47]
let max = arr27[0];

for(let i=1;i<arr27.length;i++){
    if (arr27[i]>max){
        max=arr27[i]
    }
}
console.log(max);
