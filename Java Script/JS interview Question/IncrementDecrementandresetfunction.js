function createcounter(initialvalue){
let counter=initialvalue
function increment(){
counter++
return counter;
}
function decrement(){
counter--
return counter;
}
function reset(){
counter=initialvalue
return counter
}
return{increment,decrement,reset};
}
const maximum=createcounter(200);
console.log(maximum.increment());
console.log(maximum.increment());
console.log(maximum.increment());
console.log(maximum.increment());
console.log(maximum.decrement());
console.log(maximum.decrement());
console.log(maximum.reset());
console.log(maximum.increment());
console.log(maximum.increment());