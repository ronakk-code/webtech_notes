let sum =0;
let num=153;
let n=num;
while(num>0){
    const digit = num%10;
    // console.log(digit);
    num = Math.floor(num/10);
    sum = sum + digit*digit*digit;
}
 if(sum==n){
        console.log("number is amstrong" , sum);
    }else{
        console.log("number is not amstrong" , sum)
    }

