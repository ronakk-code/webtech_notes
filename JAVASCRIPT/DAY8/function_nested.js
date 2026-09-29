function parent(){
    console.log("hello i am parent function");
    
    let child1 = function(){
        console.log("hello i am child1 function");
        
    }

    let child2 = () => {
        console.log("hello i am child2 function");
        
    }
    child1()
    child2()
}
parent()