// let num = 564;
// while(num>0){
//     const digit = num%10;
//     console.log(digit);
//     num = Math.floor(num/10);
    
// }
let sum=0;
let num=34567;
while(num>0){
    const digit = num%10;
    console.log(digit);
    num = Math.floor(num/10);
    sum = sum + digit;
}
console.log(sum);

