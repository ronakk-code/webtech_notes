function multiplegreet(n , cbf){
    for(let i=1;i<=100;i++){
        cbf()
    }
}
function greet(){
    console.log("good morning");
    
}
multiplegreet(100 , greet)