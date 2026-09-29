let sum =0;
let num =10;
for (i=1; i<=num/2; i++){
    if(num%i==0){
        sum = sum +i;
    }
}
if(sum==num){
    console.log("number is perfect number");
    
}
else{
    console.log("number is not perfect number");
    
}