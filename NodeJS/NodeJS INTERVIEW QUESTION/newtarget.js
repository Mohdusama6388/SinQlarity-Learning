function demoNewTarget(){
if(new.target==undefined){
    console.log("no")
}else{
    this.x=x ;
    console.log("creating an object")
}
console.log("Inside the function")
}
demoNewTarget(5);