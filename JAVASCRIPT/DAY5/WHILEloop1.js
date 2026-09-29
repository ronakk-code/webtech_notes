// let num=564;
// let largest=0;
// while(num>0){
//     const digit = num%10;
//     if(digit>largest){
//         largest=digit;
//     }
//     num = Math.floor(num/10);
// }
// console.log("my largest no. is" , largest);


let num=564;
let count = 0;
while(num>0){
    const digit = num%10;
    num = Math.floor(num/10);
    count++;
}
console.log(count);

