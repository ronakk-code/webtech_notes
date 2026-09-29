function parent (){
    console.log("hyy i am parent function");
    function child1 (){
        console.log("hyy i am child1 function");
    }
    function chhild2 (){
        console.log("hyy i am child2 function");
        
    }
    child1();
    chhild2();
}
parent();


let parent1 = function(){
    console.log("hyy i am parent1 function");

    let child3 = function(){
        console.log("hyy i am child3 function");
    }

    let child4 = function(){
        console.log("hyy i am child4 function");
    }
    child3();
    child4();
}
parent1();
