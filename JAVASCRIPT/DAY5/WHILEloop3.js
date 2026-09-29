let num = 121;
let rev=0;
let n=num;
while(num>0){
    const digit = num%10;
    rev = (rev*10)+digit;
    num = Math.floor(num/10) 
}
if(n==rev){
    console.log("Number is palidrone number");
    
}else{
    console.log("Number is not pallidrone number");
    
}