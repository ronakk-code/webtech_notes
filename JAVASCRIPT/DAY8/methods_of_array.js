//push
let arr1 = [1,2,3,4,5,6]
arr1.push(7)
console.log(arr1);

//pop
let arr2 = [1,2,3,4,5,6]
console.log(arr2.pop());

//shift
let arr3 = [1,2,3,4,5,6]
console.log(arr3.shift());

//unshift
let arr4 = [1,2,3,4,5,6]
arr4.unshift(100,200,300)
console.log(arr4);

//slice
let arr5 = [1,2,3,4,5,6]
let slice1 = arr5.slice(2,5)
console.log(slice1);

//splice
let arr6 = [1,2,3,4,5,6,7]
arr6.splice(2,3,100)
console.log(arr6);

//include
let arr7 = [1,2,3,4,5,6]
console.log(arr7.includes(5));

//indexof()
let arr8 = [1,2,3,4,5,6,7,8,9]
console.log(arr8.indexOf(8));
