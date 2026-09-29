// let sum = function(a,b){
//     console.log(a+b);
    
// }
// sum(100,200)


// function fact(num){
//     let fact = 1;
//     for (let i=1;i<=5;i++){
//         fact = fact * i;
//     }
//     console.log(fact);
    
// }
// fact(5)

function prime(a,b) {
    for(let i=a;i<=b;i++){
        let count = 0;
        for(let j=2;j<=i;j++){
            if (i%j==0){
                count++;
            }
        }
        if(count==1){
            console.log(i,"number is prime");
        }
        else{
            console.log(i,"number is not prime");
        }
    }
}
prime(1,50)