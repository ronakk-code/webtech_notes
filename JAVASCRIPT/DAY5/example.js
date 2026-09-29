// let sum = 0;
// let num = 34567;
// while(num>0){
//     const digit = num%10
//     // console.log(digit);
    
//     num = Math.floor (num/10) 
//     sum = sum + digit;
// }
// console.log(sum);

//=====================================================

let sum = 0;
let num = 153;
let n = num;
while(num>0){
    const digit = num%10
    num = Math.floor(num/10);
    sum = sum + digit*digit*digit
}
if(sum==n){
    console.log("the no. is amstrong number",sum);
}
else{
    console.log("the no. is not armstrong number",sum);
    
}

