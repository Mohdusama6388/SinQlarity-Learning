//-not immediate as its name
//  Its callback is place in the "check queue" of the next cycle of the event loop
// check queue ,occurs later than the inner queue
let a=5;
let b=8;
function addtwonumber(n1,n2){
    console.log(n1+n2);
 }
  setImmediate(()=>{
   addtwonumber(a,b);
    });

console.log("Inside event  loop 1")