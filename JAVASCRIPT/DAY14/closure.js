function parent(){
    let count = 0;
    function child1(){
        count++;
        console.log(count);
    }
    return child1
}
let child2 = parent()
child2()



function parent(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let child1 = parent()
child1()