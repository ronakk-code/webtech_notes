// let sum=0;
// for(let i=1;i<=20;i++){
//     if(i %2 !==0){
//         sum =sum +i*i
//     }
// }
// console.log(sum);


let count=0;
let num=7;
for(let i=2; i<=num; i++){
    if(num%i==0){
        count++;
    }
}
if(count==1){
    console.log("the No. is prime no.");
}else{
    console.log("the No. is not prime no.");
    
}