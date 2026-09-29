function parent(cbf){
    console.log("hyy i am parent function");
    cbf()
}
function child(){
    console.log("hyy i am child function");
}
parent(child)

